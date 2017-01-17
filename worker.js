var Consumer = require('sqs-consumer');
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

var app = Consumer.create({
  VisibilityTimeout: 5,
  waitTimeSeconds : 1,  //
  queueUrl: _sqsUrl,
  region: _region,
  batchSize: 10,
  handleMessage: function (message, done) {

    console.log('start ...')

    setTimeout(function(){    
      console.log(message);

      setTimeout(function(){   
        return done();
      },30000) 

    },3000)

    // Messages are deleted from the queue once done() is called.
    // Calling done(err) with an error object will cause the message to be left on the queue.
  }
});

app.on('error', function (err) {
  console.log(err);
});

app.start();