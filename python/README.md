# serverless - python

Python 3.7

## dependencies

- boto3
- npm
  - serverless-python-requirements

## usage

set DynamoDB tablename -> `handler.py, serverless.yml`

```sh
sls plugin install -n serverless-python-requirements
sls deploy
```
