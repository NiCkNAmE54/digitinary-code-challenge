## Description

Digitinary Code task with Nestjs



##Prerequisites
please make sure nodejs version 17 or above and the latest nestjs are installed unless you want to run the app using docker


## Installation with node

```bash
$ npm install
```

## Running the app with node

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Installation with docker
```bash
$ docker-compose build
```

## Running the app with docker
```bash
$ docker-compose up
```


## Project Structure

- /src
  - /database
    - /entities
    - /migrations
  - /modules
    - /pokemmon
    - /swagger
    - /type
    - /weather
  - /shared
    - /config
    - /core
- /tests
