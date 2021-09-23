# Vendomatic Frontend

Web Frontend application developed for testing a beverage vending machine.

## Setup

### Local development

In order set up and run the project for local development, you can use Docker, and run the following command:

`docker-compose up -d --build`

which uses the `docker-compose.yml` file as a source of configuration.

To terminate the program you can run `docker-compose down`.

The envvar `REACT_APP_BACKEND_API_BASE_URL` must be set to point to the backend API URL. You can use the file
`.env.template` as an example.

### Production

In order to set up the production environment, you can use the following command:

`docker-compose -f docker-compose.prod.yml up -d --build`

which uses the `docker-compose.prod.yml` file as a source of configuration, and sets up an nginx instance.

To terminate the program you can run `docker-compose -f docker-compose.prod.yml down`.

The envvar `REACT_APP_BACKEND_API_BASE_URL` must be set to point to the backend API URL. You can use the file
`.env.template` as an example.
