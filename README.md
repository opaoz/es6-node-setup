# NPM commands
```bash
    # Start app
    $ npm run start
    
    #Test app
    $ npm run test
    
    # Generate APIDOCs
    $ npm run apidoc
```

# Docker build and run
```bash
    # Build image
    $ docker build -t opa-oz/es6-node-setup .
    
    # Get images list
    $ docker images
    
    # Run on maching port 49160, redirected to 3000
    $ docker run -p 49160:3000 -d opa-oz/es6-node-setup
```
# Docker container work
```bash
    # Get container ID
    $ docker ps
    
    # Print app output
    $ docker logs <container id>
    
    # Enter the container
    $ docker exec -it <container id> /bin/bash
```
# Docker mongo
```bash
    # Pull mongo container
    $ docker pull mongo:latest
    
    # Run mongodb
    $ docker run -v "$(pwd)":/data --name mongo -d mongo mongod --smallfiles
    
    # Run node with mongod
    $ docker run -p 49160:3000 -v "$(pwd)":/data --link mongo:mongo -d opa-oz/es6-node-setup
```
