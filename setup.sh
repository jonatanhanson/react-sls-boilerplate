#!/bin/sh

# Install client packages
cd client && yarn && cd ..

# Install server dependecies
cd api && yarn && sls dynamodb install && cd ..

# Search replace hardcoded project names etc
