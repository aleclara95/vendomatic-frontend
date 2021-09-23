# Vendomatic Frontend

Web Frontend application developed for testing a beverage vending machine.

## Setup

### Local development

In order set up and run the project for local development, you can use Docker, and run the following command:

`docker-compose up -d --build`

which uses the `docker-compose.yml` file as a source of configuration.

### Production

In order to set up the production environment, you can use the following command:

`docker-compose -f docker-compose.prod.yml up -d --build`

which uses the `docker-compose.prod.yml` file as a source of configuration, and sets up an nginx instance.
