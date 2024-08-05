# Amazon SNS Setup for Contact Form Notifications

This guide explains how to set up Amazon SNS (Simple Notification Service) to send notifications whenever the contact form is submitted. We'll walk through creating a topic, subscribing to that topic, and configuring the AWS Lambda function to publish messages to this topic.

## Step 1: Create SNS Topic

1. **Open the AWS Management Console** and navigate to the SNS dashboard.
2. **Create Topic**:
   - Click on “Create topic”.
   - Choose “Standard” as the type.
   - Enter a name for your topic, such as `ContactFormNotificationsTopic`.
   - Leave the default settings or adjust them as necessary.
   - Click on “Create topic”.

## Step 2: Subscribe to the Topic

Once your topic is created, you need to set up a subscription to dictate how notifications are sent.

1. **Navigate to the newly created topic** in the SNS dashboard.
2. **Create Subscription**:
   - Click on “Create subscription”.
   - Choose the protocol depending on how you wish to receive notifications. For email notifications:
     - Protocol: Email
     - Endpoint: Enter the email address where notifications should be sent.
   - Click on “Create subscription”.
   - An email will be sent to the specified address to confirm the subscription. Ensure that you confirm this subscription to activate it.

## Step 3: Configure Lambda Function

The Lambda function needs to publish a message to the SNS topic whenever the contact form is submitted.

1. **Open the Lambda function** from the AWS Lambda console.
2. **Add SNS Publish Permission**:
   - Navigate to the IAM role associated with your Lambda function.
   - Attach a policy to the role that allows it to publish to the SNS topic. You can use the AmazonSNSFullAccess policy for broad access, or create a custom policy for better security.
   - Example of a custom policy:

     ```json
     {
       "Version": "2012-10-17",
       "Statement": [
         {
           "Effect": "Allow",
           "Action": "sns:Publish",
           "Resource": "arn:aws:sns:region:account-id:ContactFormNotifications"
         }
       ]
     }
     ```

3. **Modify Lambda Code**:
   - Ensure your Lambda function is set up to publish to the SNS topic. [Here](https://github.com/xsechaba/contact-form/blob/main/backend/lambda_function.py)’s an example of how to integrate SNS into your Lambda function.

## Conclusion

Following these steps will set up Amazon SNS to send notifications whenever your contact form is submitted. This setup ensures that you are promptly informed of new submissions, allowing for efficient response and management.
