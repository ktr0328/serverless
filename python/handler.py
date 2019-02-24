import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('tablename')


def get_person(id):
    response = table.get_item(Key={'id': id})

    return response['Item']

def get_persons():
    response = table.scan()

    return response['Items']

def hello(event, context):
    return get_person(event['id']) if event['id'] else get_persons()
