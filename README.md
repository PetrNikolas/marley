# Marley

* Version 0.7.3

* [Demo](https://marleyapp.herokuapp.com/)

## Prerequisites and Main Libraries
* [Angular](https://angular.io/)
* [Angular-cli](https://github.com/angular/angular-cli)
* [Angular Universal](https://universal.angular.io/)
* [Node.js](https://nodejs.org/en/)
* [express.js](https://expressjs.com/)
* [Bulma](http://bulma.io/)
* [Sass](http://sass-lang.com/)

## Project Setup
1. Clone this repo.
2. Run `yarn setup:project` to install dependencies, build project and start serve.

## Web Development
### Development build and serve with live reload
1. Run `yarn serve` to build the project for development and serve.

### Build for production
1. Run `yarn build:prod` to build the project for production.

### Build for SSR
1. Run `yarn build:ssr` to build the project for production with server side rendering.
2. Run `yarn start` for start server with server side.

## Code scaffolding
1. Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Running unit tests
1. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
1. Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
2. Before running the tests make sure you are serving the app via `yarn build:dev`.

## Lint
1. Run `yarn lint`.

## Gitlab CI
* In `.ci` folder are two prepared files for Heroku and AWS deploy. You can choose one of these.