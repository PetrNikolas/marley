# Marley

* Version 0.8.0

## Prerequisites and Main Libraries
* [Angular](https://angular.io/)
* [Angular-cli](https://github.com/angular/angular-cli)
* [Nx Workspace](https://nrwl.io/nx)
* [Node.js](https://nodejs.org/en/)
* [express.js](https://expressjs.com/)
* [Bulma](http://bulma.io/)
* [Normalize.css](http://necolas.github.io/normalize.css/)
* [Sass](http://sass-lang.com/)
* [Jest](https://jestjs.io/)
* [TestCaffe](https://devexpress.github.io/testcafe/)

## Project Setup
1. Clone this repo.
2. Run `npm install` to install dependencies.

## Web Development
### Development build and serve with live reload
1. Run `npm run serve` to build the project for development and serve.

#### Run with proxy
1. Run `npm run serve:proxy` to build the project for development and serve with proxy config.

### Build for production
1. Run `npm run nx:affected:build` to build the project for production.

## Code scaffolding
1. Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Running unit tests
1. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
1. Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
2. Before running the tests make sure you are serving the app via `yarn build:dev`.

## Lint
1. Run `npm run lint`.

## Gitlab CI
* In `.ci` folder are two prepared files for Heroku and AWS deploy. You can choose one of these.