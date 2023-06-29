# Base image
FROM node:16

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# Copy the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the port
EXPOSE 3000

# Start the Next.js server
CMD ["yarn", "start"]
