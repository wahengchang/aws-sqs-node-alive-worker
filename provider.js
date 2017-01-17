


// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

var _accessKeyId = "myAccessKeyId";
var _secretAccessKey = "mySecretAccessKey";
var _region = "us-east-1";
var _sqsUrl = "https://sqs.us-east-1.amazonaws.com/xxx/SQS_QUEUE_NAME";

AWS.config.update({
    "accessKeyId": _accessKeyId,
    "secretAccessKey": _secretAccessKey,
    "region": _region
});

// Create SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});
var msg = process.argv.slice(2).join(' ') || 'default msg' ;

var params = {
  DelaySeconds: 1,
  MessageAttributes: {
    "Title": {
      DataType: "String",
      StringValue: "The Whistler"
    },
    "Author": {
    DataType: "String",
    StringValue: "John Grisham"
    },
  "WeeksOn": {
    DataType: "Number",
    StringValue: "6"
   }
 },
 MessageBody: msg,
 QueueUrl: _sqsUrl
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});