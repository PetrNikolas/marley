# Marley

Mini Starter Kit for complex web apps.

* Version 0.3.4

## Prerequisites and Main Libraries

### Client
* [Angular 2](https://angular.io/),
* [Angular-cli](https://github.com/angular/angular-cli),
* [Node.js](https://nodejs.org/en/),
* [koa.js](http://koajs.com/),
* [Webpack](https://webpack.js.org/),
* [Rollup.js](https://rollupjs.org/),
* [Bulma](http://bulma.io/),
* [Sass](http://sass-lang.com/),
* [Animate.css](https://github.com/daneden/animate.css).

### API
* [Elixir](https://elixir-lang.org/),
* [Phoenix framework](http://phoenixframework.org/).

### DB
* [GraphQL](http://graphql.org/),
* [RocksDB](http://rocksdb.org/).

## Project Setup and start

### App

`cd client`

1. Run `cd marley`.
2. Run `npm install`.
3. Run `npm run build`.
4. Run `npm start` and visit http://localhost:8080/. That's it!.

#### For Development Angular Server
3. Run `ng build`.
4. Run `ng serve` and visit http://localhost:4200/.

#### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

#### Build for Production
5. Run `npm run build`
6. Run `npm start` and visit http://localhost:4200/.

#### Running unit tests
7. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests
8. Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
9. Before running the tests make sure you are serving the app via `ng serve`.

#### Running lint
10. Run `ng lint`.

### API

`cd api`

1. Install dependencies with `mix deps.get`.
2. Create and migrate your database with `mix ecto.create && mix ecto.migrate`.
3. Start Phoenix endpoint with `mix phoenix.server`.
4. Finally open your browser and try to open http://localhost:4000/.