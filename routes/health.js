const PACKAGE_INFO = require('../package.json')

// health check API endpoint
function health(req, res) {
  const SUCCESS = {
    "service": PACKAGE_INFO.name,
    "status": "200",
    "version": PACKAGE_INFO.version,
    "note": ""
  }
  res.json(SUCCESS);
}

module.exports = health