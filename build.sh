#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Create the build output directory if it doesn't exist.
mkdir -p build

# Build the Docker image.
echo "Building the Docker image..."
docker build -t my-travel-site .

# Run the Docker container to build the site.
# The --rm flag automatically removes the container when it exits.
# The -v flag mounts the local ./build directory to /app/build in the container.
echo "Building the website..."
docker run --rm -v "$(pwd)/build":/app/build my-travel-site

echo "Build complete. The static site is available in the 'build' directory."