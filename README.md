# Autodesk_Assignment - Matan Talvi
Junior Home Assignment

link to my live API: https://youtube-autodesk-demo-92e54ea6bfc3.herokuapp.com/

This repository contains a Node.js service with two API endpoints:

**1. GET /youtube**
- Fetches a list of 10 videos with title, length, and views from YouTube related to "Autodesk".
Request
- Method: GET
- URL: /youtube
- Parameters: None

Response
Content: JSON array of video objects with the following attributes:
title: Title of the video
length: Length of the video
views: Number of views for the video

**2. GET /health**
- Returns health check information including OS, Node.js version, memory usage, and CPU usage.
Request
- Method: GET
- URL: /health
- Parameters: None

Response
Content: JSON object with the following attributes:
os: Operating system name
version: Language/platform version
memoryUsage: Memory usage of the machine (percentage value)
cpuUsage: CPU usage of the machine (percentage value)

**Running Locally with Docker**
1. Clone the repository from Github:
   git clone https://github.com/MatanTalvi10/Autodesk_Assignment.git
2. Navigate to the project directory:
   cd [Your Project Directory]
3. Build the Docker image:
   docker build -t [Your Docker Image Name] .
4. Run the Docker container:
   docker run -p 3000:3000 [Your Docker Image Name]
5. Access the API at http://localhost:3000.


