# Marley

Mini Starter Kit for complex web apps and versioned REST API.

Version: 0.3.1

## Prerequisites

* [angular-cli](https://github.com/angular/angular-cli),
* [Node.js v6 and +](https://nodejs.org/en/download/),
* [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
* [Elixir](elixir-lang.org/),
* [Phoenix framework](http://www.phoenixframework.org/),
* [PosgreSQL](https://www.postgresql.org).

## Main Libraries

* [Angular 2](https://angular.io/),
* [Angular-cli](https://github.com/angular/angular-cli),
* [Node.js](https://nodejs.org/en/),
* [Express.js](http://expressjs.com),
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
3. Run `npm start` and visit http://localhost:8080/. That's it!.

### API side setup

1. Run `cd api`.
2. Run `mix deps.get`.
3. Create and migrate your database with `mix ecto.create && mix ecto.migrate`.
4. Run `npm install`.
5. Start Phoenix endpoint with `mix phoenix.server`.
6. Now you can visit http://localhost:4000/. That's it!.