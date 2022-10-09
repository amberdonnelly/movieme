#!/bin/bash

# Run npm in the background
npm install react-router-dom
npm start &

# run api in the foreground
cd api/
flask run
