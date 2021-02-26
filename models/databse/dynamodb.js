const mLogger = require('../../configs/logger').log4js.getLogger('./models/database/dynamodb');
const AWS = require('aws-sdk');
let config = {};
if (process.env.DYNAMO_HOST && process.env.DYNAMO_PORT) {
  config.endpoint = `http://${process.env.DYNAMO_HOST}:${process.env.DYNAMO_PORT}`;
}
AWS.config.update(config);
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

async function listTables() {
  try {
    let data = await dynamodb.listTables().promise()
    mLogger.info('listTables result:', data)
    return data
  } catch (error) {
    mLogger.error('listTables error:', error)
    throw error
  }
}

async function createTable(params) {
  try {
    let data = await dynamodb.createTable(params).promise()
    mLogger.info('createTabel result:', data)
    return data
  } catch (error) {
    mLogger.error('CreateTable error:', error)
    throw error
  }
}

async function deleteTable(params) {
  try {
    let data = await dynamodb.deleteTable(params).promise()
    mLogger.info('deleteTable result:', data)
    return data
  } catch (error) {
    mLogger.error('deleteTable error:', error)
    throw error
  }
}

exports.dynamodb = dynamodb
exports.listTables = listTables
exports.createTable = createTable
exports.deleteTable = deleteTable