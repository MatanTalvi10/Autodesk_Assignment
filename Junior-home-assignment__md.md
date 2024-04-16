# Junior Home Assignment

## Overview

Welcome to Autodesk Home Assignment.
Your task is to write a simple service with two endpoints and deploy it to [Heroku](https://www.heroku.com/) with a Docker container

## Details

### API
Your service should include the following API:

##### 1. GET [Youtube API]
This endpoint should get a list of 10 videos with Autodesk from YouTube api with confirmation details: title, length, views. 'Topic' set to Autodesk from [Youtube API].

No need to support pagination.

##### 2. GET /health
This endpoint should return a health check of your service with the following data:
1. OS name - Darwin/Windows/etc.
2. Language/platform version - Your Node.js version for example
3. Memory usage of your machine (Percentage value)
4. CPU usage of your machine (Percentage value)

### Code
Your code should be written with Node.js. You are welcome to use any NPM package you wish.

#### Docker 
Running and deploying your service should be done with a Docker container.

#### Github
Make sure to host all your code on Github repository, including your Dockerfile and a README file. 

Your README file should include:
1. A link to your live API on Heroku
2. Any required documantion for your API and how to use them.
3. Instructions about how to run your service locally with Docker.

### Deployment
Your service should be deployed to [Heroku](https://www.heroku.com/) with a Docker container. 

## FAQ
Q: Do I need to create any UI/Client for my task? 

A: No. We only request for a backend service who returns JSON


Q: What should I send you?

A: Just a link to your Github repo


Q: Should I write tests for my service?

A: Tests are not mandatory to complete this assignment, but it is a wonderful best practice, so you are free to add some.