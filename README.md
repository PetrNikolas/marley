# Marley

Mini Starter Kit for complex web apps and versioned REST API.

Version: 0.3.2

## Prerequisites

### Client
* [angular-cli](https://github.com/angular/angular-cli),
* [Node.js v6 and +](https://nodejs.org/en/download/),
* [NPM](https://docs.npmjs.com/getting-started/what-is-npm).

### API
* [Elixir](elixir-lang.org/),
* [Phoenix framework](http://www.phoenixframework.org/).

### Database
* [PosgreSQL](https://www.postgresql.org).

## Main Libraries

* [Angular 2](https://angular.io/),
* [Angular-cli](https://github.com/angular/angular-cli),
* [Node.js](https://nodejs.org/en/),
* [koa.js](http://koajs.com/),
* [Webpack](https://webpack.js.org/),
* [Rollup.js](https://rollupjs.org/),
* [Elixir](elixir-lang.org/),
* [Phoenix framework](http://www.phoenixframework.org/),
* [PosgreSQL](https://www.postgresql.org/),
* [Bulma](http://bulma.io/),
* [Sass](http://sass-lang.com/),
* [Animate.css](https://github.com/daneden/animate.css).

## Project Setup and start

Clone or download this repo. 

### Client side setup

1. Run `cd client`.
2. Run `npm install`.
3. Run `npm run build`.
4. Run `npm start` and visit http://localhost:8080/. That's it!.

### API side setup

1. Run `cd api`.
2. Run `mix deps.get`.
3. Create and migrate your database with `mix ecto.create && mix ecto.migrate`.
4. Run `npm install`.
5. Start Phoenix endpoint with `mix phoenix.server`.
6. Now you can visit http://localhost:4000/. That's it!.

## Roadmap

### What's Coming in 2017

#### For Client:
* Integrate Angular Universal library
* Integrate Autoprefixer library ✓
* Integrate Broccoli.js build
* Integrate GraphQL data query
* Integrate Redux and ngrx architecture

#### For API:
* Change phoenix backend for node.js
* Integrate ElasticSearch, Kibana, Logstash, Beats for data, visualization, etc.
* Integrate Redis for data caching
* Integrate Kafka
* Integrate RabbitMQ messages
* Integrate Grafana
* Integrate Kubernetes