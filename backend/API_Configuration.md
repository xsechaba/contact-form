# API Gateway Configuration and CORS Setup

This document outlines the steps for setting up AWS API Gateway and configuring Cross-Origin Resource Sharing (CORS) for the contact form project. The setup ensures that your API can handle requests from your frontend application securely and efficiently.

## Step 1: Create API Gateway

1. **Navigate to AWS Management Console** and open the API Gateway service.
2. **Create API**:
   - Choose “Create API”.
   - Select “HTTP API” as it's suitable for simple HTTP request-response interactions.
   - Click on “Build”.

## Step 2: Configure Routes

1. **Add Integration**:
   - After creating the API, add an integration:
   - Choose “Lambda” as the integration type and link it to your existing Lambda function.
   - Set the region and provide the name of your Lambda function.

2. **Define the Route**:
   - Create a route that will trigger the Lambda function:
   - Choose `POST` as the method.
   - Set the route as `/contact`.

## Step 3: Define Stages

1. **Create a Stage**:
   - API Gateway allows you to manage deployments through stages.
   - Create a stage named `prod` or `development` depending on your needs.
   - Enable “Auto-deploy” to automatically deploy changes to this stage.

## Step 4: Enable CORS

To allow your frontend to make requests to your API, you need to configure CORS:

1. **Select the POST Method** of your `/contact` route.
2. **Enable CORS**:
   - Click on the “CORS” tab or link.
   - Configure the following settings:
     - **Access-Control-Allow-Origin**: Set this to `*` for development. For production, specify your specific domain to restrict access.
     - **Access-Control-Allow-Methods**: Ensure `POST` is included.
     - **Access-Control-Allow-Headers**: Add necessary headers like `Content-Type`, `X-Amz-Date`, `Authorization`, `X-Api-Key`, `X-Requested-With`.
     - **Access-Control-Expose-Headers**: Specify headers that should be accessible to the browser's JavaScript.
     - **Access-Control-Max-Age**: Set this to `3600` to allow browsers to cache preflight responses for an hour.
     - **Access-Control-Allow-Credentials**: Set to `false` unless your application specifically requires credentials.

## Step 5: Deploy API

- After configuring CORS and verifying all settings, deploy your API:
  - Navigate back to the Stages section.
  - Select your stage and click on “Deploy”.

## Step 6: Testing

- Test the API using tools like Postman or directly from your frontend application to ensure that it responds correctly and handles CORS as expected.

## Conclusion

Following these steps will set up your API Gateway to handle requests from your contact form and respond appropriately. It's important to test the configuration in a development environment before moving to production to ensure everything works as expected.

