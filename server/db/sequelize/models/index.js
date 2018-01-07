import Sequelize from 'sequelize';
import sequelizeConfig from '../sequelize_config';
import { ENV } from '../../../../config/env';
import userModel from './users';
import serverModel from './servers';
import genreModel from './genres';
import lobbyModel from './lobbies';
import lobbyPolicyModel from './lobbypolicy';
import lobbyTypeModel from './lobbyType';
import queueModel from './queue';
import playlistModel from './playlists';
import ptaTracksModel from './ptatracks';
import trackTypeModel from './tracktype';
import trackModel from './tracks';
import queueRuleModel from './queuerules';
import voteModel from './votes';
const config = sequelizeConfig[ENV];

const db = {};
const dbUrl = process.env[config.use_env_variable];

const sequelize = dbUrl ? new Sequelize(dbUrl) : new Sequelize(config.database, config.username, config.password, config);

db.User = sequelize.import('User', userModel);
db.Servers = sequelize.import('Servers', serverModel);
db.Genres = sequelize.import('Genres', genreModel);
db.Lobbies = sequelize.import('Lobbies', lobbyModel);
db.LobbyPolicy = sequelize.import('LobbyPolicy', lobbyPolicyModel);
db.LobbyType = sequelize.import('LobbyType', lobbyTypeModel);
db.Queue = sequelize.import('Queue', queueModel);
db.Playlists = sequelize.import('Playlists', playlistModel);
db.PTATracks = sequelize.import('PTATracks', ptaTracksModel);
db.TrackType = sequelize.import('TrackType', trackTypeModel);
db.Tracks = sequelize.import('Tracks', trackModel);
db.QueueRules = sequelize.import('QueueRules', queueRuleModel);
db.Votes = sequelize.import('Votes', voteModel);
Object.keys(db).forEach((key) => {
  const model = db[key];
  if (model.associate) {
    model.associate(db);
  }
});

export { db as Models, sequelize };
