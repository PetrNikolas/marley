# Marley

Mini Starter Kit for complex web apps and versioned REST API.

Version: 0.3.2

## Prerequisites and Main Libraries

### Front-End
* [Angular 2](https://angular.io/),
* [Angular-cli](https://github.com/angular/angular-cli),
* [Node.js](https://nodejs.org/en/),
* [koa.js](http://koajs.com/),
* [Webpack](https://webpack.js.org/),
* [Rollup.js](https://rollupjs.org/),
* [Bulma](http://bulma.io/),
* [Sass](http://sass-lang.com/),
* [Animate.css](https://github.com/daneden/animate.css).

### Back-End
* [Ruby](https://www.ruby-lang.org/),
* [Hanami](http://hanamirb.org/),
* [Sinatra](http://www.sinatrarb.com/),
* [PosgreSQL](https://www.postgresql.org/),.

## Project Setup and start

Clone or download this repo. 

### Client setup
* `cd client`
1. Run `cd client`.
2. Run `npm install`.
3. Run `npm run build`.
4. Run `npm start` and visit http://localhost:8080/. That's it!.

### API setup
* `cd api`
1. Run `bundle install`.
2. Run `bundle exec hanami db migrate`.
3. Start Phoenix endpoint with `bundle exec hanami server`.
3. Now you can visit http://localhost:2300. That's it!.

### Worker
* `cd worker`
1. Run `bundle install`.
3. Run `ruby server.rb`.

### Proxy server
* `cd proxy_server`
1. Run `go run main.go`.

## Roadmap

### What's Coming in 2017
#### For Client:
* Integrate Angular Universal library
* Integrate Autoprefixer library ✓
* Integrate Broccoli.js build
* Integrate GraphQL data query
* Integrate Redux and ngrx architecture

#### For API:
* Integrate ElasticSearch, Kibana, Logstash, Beats for data, visualization, etc.
* Integrate Redis for data caching
* Integrate Kafka
* Integrate RabbitMQ messages
* Integrate Grafana
* Integrate Kubernetes