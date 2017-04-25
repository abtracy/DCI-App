# DCI App

A project for CS 4750 (Databases) at University of Virginia

## Getting Started

1. Clone the repo and ```cd``` to the project root.
2. Run ```npm install``` to install all the project dependencies.
3. Run ```npm start``` to start the app. The home page will be at localhost:8000.

## Understanding the Code Base

This project is written with AngularJS. If you aren't familiar with Angular, the file ```app/Corps/corps.js``` has been heavily commented to explain key points. The comments are generalizable to other parts of the application.

## Backend Information

The backend for this project is in a separate repo ([hab9sr/dci-backend](https://github.com/hab9sr/dci-backend)). The helper function ```projectApi()``` in ```app/app.js``` can be configured to handle API requests either on localhost or on UVa's department servers -- just comment out the appropriate line.
