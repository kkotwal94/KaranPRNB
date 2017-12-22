const PATHS = require('../paths');

module.exports = () => ({
  test: /\.(webm|mp4)$/,
  loader: 'file-loader',
  include: PATHS.app,
});
