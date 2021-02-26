const mLogger = require('../configs/logger').log4js.getLogger('./routers/dynamodb')
const dynamodb = require('../models/databse/dynamodb')

async function listTables(req, res) {
  try {
    let data = await dynamodb.listTables()
    mLogger.info('listTables result:', data)
    res.json(data)
  } catch (error) {
    res.json(error)
  }
}

async function createTable(req, res) {
  try {
    let params = {
      AttributeDefinitions: [
        {
          AttributeName: "Artist",
          AttributeType: "S"
        },
        {
          AttributeName: "SongTitle",
          AttributeType: "S"
        }
      ],
      KeySchema: [
        {
          AttributeName: "Artist",
          KeyType: "HASH"
        },
        {
          AttributeName: "SongTitle",
          KeyType: "RANGE"
        }
      ],
      BillingMode: 'PAY_PER_REQUEST',
      TableName: "Music"
    }
    let data = await dynamodb.createTable(params)
    mLogger.info('createTable result:', data)
    res.json(data)
  } catch (error) {
    res.json(error)
  }
}

async function deleteTable(req, res) {
  try {
    let params = {
      TableName: 'Music'
    }
    let data = await dynamodb.deleteTable(params).promise()
    res.json(data)
  } catch (error) {
    res.json(error.message)
  }
}

exports.listTables = listTables
exports.createTable = createTable
exports.deleteTable = deleteTable