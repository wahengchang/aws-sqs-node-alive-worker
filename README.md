#aws-sqs-node-alive-worker
it is an example of running an alive worker which continually listens to given SQS URL on AWS


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