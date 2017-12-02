const path = require('path');

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  app: path.resolve(CURRENT_WORKING_DIR, 'app'),
  assets: path.resolve(CURRENT_WORKING_DIR, 'public', 'assets'),
  compiled: path.resolve(CURRENT_WORKING_DIR, 'compiled'),
  public: '/assets/', // use absolute path for css-loader?
  modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules')
};
