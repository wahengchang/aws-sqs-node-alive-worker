#aws-sqs-node-alive-worker
it is an example of running an alive worker which continually listens to given SQS URL on AWS

##Init
Init your accessKeyId, secretAccessKey, region and sqsUrl on both worker.js and provider.js file.
```
var _accessKeyId = "myAccessKeyId";
var _secretAccessKey = "mySecretAccessKey";
var _region = "us-east-1";
var _sqsUrl = "https://sqs.us-east-1.amazonaws.com/xxx/SQS_QUEUE_NAME";

```

##Run alive worker
```
$ node worker.js

```


##Run provider
After running provider, a job will be added to a FIFO queue to SQS, and consumed by the worker
```
$ node provider.js someMessage
Success some-aws-sqs-id-id

```

##Note
 - waitTimeSeconds: how long to way for next pooling
