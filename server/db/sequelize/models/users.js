import Promise from 'bluebird';
import bcryptNode from 'bcrypt-nodejs';

const bcrypt = Promise.promisifyAll(bcryptNode);

// Other oauthtypes to be added

/* eslint-disable no-param-reassign */
function hashPassword(user) {
  if (!user.changed('password')) return null;
  return bcrypt.genSaltAsync(5).then(salt =>
    bcrypt.hashAsync(user.password, salt, null).then((hash) => {
      user.password = hash;
    })
  );
}
/* eslint-enable no-param-reassign */

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    gender: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    location: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    website: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    picture: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    resetPasswordToken: {
      type: DataTypes.STRING
    },
    resetPasswordExpires: {
      type: DataTypes.DATE
    },
    google: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false,

    instanceMethods: {
      comparePassword(candidatePassword) {
        return bcrypt.compareAsync(candidatePassword, this.password);
      },

      toJSON() {
        return {
          id: this.id,
          email: this.email,
          profile: {
            name: this.name,
            gender: this.gender,
            location: this.location,
            website: this.website,
            picture: this.picture,
            description: this.description,
          }
        };
      }
    },
      classMethods: {
        associate(models) {
          User.hasOne(models.Servers, {foreignKey: 'id'});
          User.belongsToMany(models.Servers, {through: 'ServerAdmins', as: 'Admins'});
          User.belongsToMany(models.Servers, {through: 'ServerUsers', as: 'Users'});
          User.belongsToMany(models.Servers, {through: 'ServerBanlist', as: 'BannedUsers'});
          User.belongsToMany(models.Servers, {through: 'ServerMutelist', as: 'MutedUsers'});
          User.belongsToMany(models.User, {through: 'UserFriends', as: 'Friends'});
          User.belongsToMany(models.User, {through: 'UserFollowers', as: 'Followers'});
          User.belongsToMany(models.Lobbies, {through: 'LobbyBanlist', as: 'LobbyBannedUsers'});
          User.belongsToMany(models.Lobbies, {through: 'LobbyMutelist', as: 'LobbyMutedUsers'});
          User.belongsToMany(models.Lobbies, {through: 'LobbyAdmins', as: 'LobbyAdmins'});
          User.belongsToMany(models.Lobbies, {through: 'LobbyUsers', as: 'LobbyUsers'});
          User.hasMany(models.Playlists);
          User.hasMany(models.QueueRules);
          User.hasMany(models.Votes);
        }
      }
  });


  User.beforeCreate(hashPassword);
  User.beforeUpdate(hashPassword);

  return User;
};
