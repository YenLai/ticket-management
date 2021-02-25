const log4js = require('log4js')
const debug = require('./logger_debug')
/*
*  usage :
*    var mLogger = require('[path]/helpers/mLogger.js').log4js.getLogger('your tag name');
*    mLogger.trace();
*    mLogger.debug();
*    mLogger.info();
*    mLogger.warn();
*    mLogger.error();
*    mLogger.fatal();
*
*    connect/express mLogger:
*      http responses 3xx, level = WARN
*      http responses 4xx & 5xx, level = ERROR
*      else, level = INFO
*
*/
log4js.configure(debug)

module.exports = {
  express: log4js
    .connectLogger(log4js.getLogger('express'), { level: 'auto', format: ':method :url' }),
  log4js: log4js
};