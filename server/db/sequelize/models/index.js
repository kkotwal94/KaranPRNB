import Sequelize from 'sequelize';
import sequelizeConfig from '../sequelize_config';
import { ENV } from '../../../../config/env';
import userModel from './users';
import serverModel from './servers';
import genreModel from './genres';

const config = sequelizeConfig[ENV];

const db = {};
const dbUrl = process.env[config.use_env_variable];

const sequelize = dbUrl ? new Sequelize(dbUrl) : new Sequelize(config.database, config.username, config.password, config);

db.User = sequelize.import('User', userModel);
db.Servers = sequelize.import('Servers', serverModel);
db.Genres = sequelize.import('Genres', genreModel);
Object.keys(db).forEach((key) => {
  const model = db[key];
  if (model.associate) {
    model.associate(db);
  }
});

export { db as Models, sequelize };
