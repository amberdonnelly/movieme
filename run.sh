#!/bin/bash

# Run npm in the background
npm start & 

# run api in the foreground
cd api/
flask run
