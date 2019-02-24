const AWS = require('aws-sdk')
const db = new AWS.DynamoDB.DocumentClient()
const TableName = 'tablename'

module.exports.hello = async (event, context) => {
  const items = await db.scan({
    TableName
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: items,
      input: event,
    })
  }
}
