FROM node:boron

# Create app directory
WORKDIR /var/www/es6

# For npm@5 or later, copy package-lock.json as well
COPY package.json package-lock.json ./

# Install deps
RUN npm install

# Copy app files
COPY . .

# Expose out port
EXPOSE 3000

# Start tests
CMD ["npm", "test"]

# Generate apidocs
CMD ["npm", "run", "apidoc"]

# Start app
CMD ["npm", "start"]
