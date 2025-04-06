#!/bin/bash

# Change to the repository directory
cd /home/$USER/portfolio

# Pull the latest changes
git pull

# Install dependencies
npm install

# Build the project
npm run build

# Copy to web server directory
cp -r out/* /var/www/portfolio/

echo "Deployment completed successfully!" 