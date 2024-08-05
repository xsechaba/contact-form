import json
import boto3

def lambda_handler(event, context):
    # Parse the incoming JSON payload
    body = json.loads(event['body'])

    # Extract fields
    fullname = body['fullname']
    email = body['email']
    message = body['message']

    # Prepare the message
    notification_message = f"New contact form submission:\nName: {fullname}\nEmail: {email}\nMessage: {message}"

    # Initialize SNS client
    sns_client = boto3.client('sns')

    # Send a notification
    response = sns_client.publish(
        TopicArn='arn:aws:sns:region:account-id:ContactFormNotificationsTopic', 
        Message=notification_message,
        Subject='New Contact Form Submission'
    )

    return {
        'statusCode': 200,
        'body': json.dumps('Form submitted successfully!')
    }

