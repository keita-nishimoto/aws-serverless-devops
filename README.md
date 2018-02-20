# aws-serverless-devops
Code for realizing DevOps using AWS Lambda

# Getting Started

This Project uses Serverless Framework.

You need to create an IAM user with Administrator Access.

Please register Access key ID and Secret access key as credential.

I think that it is easy to use the following command.

```
serverless config credentials --provider aws --key <your-key-here> --secret <your-secret-key-here>
```

Please refer to the [official document](https://serverless.com/framework/docs/providers/aws/guide/credentials/) for details.

## Install npm package

`yarn install`

## Deploy To AWS

`yarn run deploy:dev`

If you want to delete all resources, execute `yarn run remove:dev` .

# List of Lambda functions

## haltEc2Instances

This function stops all running EC2 instances.

## upEc2Instances

This function starts all stopped EC2 instances.

### When `haltEc2Instances` and `upEc2Instances` are executed

These functions are assumed to be scheduled.

Please fix the schedule of `serverless.yml` to the time you want to run.

Please refer to the [official document](https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/tutorial-scheduled-events-schedule-expressions.html) for details.
