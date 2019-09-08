# Marley

- Modern Angular 7+ Starter Kit.
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and [ngX-Rocket](https://github.com/ngx-rocket/starter-kit).

## Table of Contents

- [Benefits](#benefits)
- [Libraries](#libraries)
- [Project Setup](#project-setup)
- [Creating an Application](#creating-an-application)
- [Creating a Library](#creating-a-library)
- [Creating Libraries with Tags](#creating-libraries-with-tags)
- [Creating components in a library or app](#creating-components)
- [Ngrx Store Generation](#ngrx-store-generation)
- [Updating Nx](#updating-nx)
- [Development server](#development-server)
- [Build](#build)
- [Running unit tests](#running-unit-tests)
- [Running end-to-end tests](#running-end-to-end-tests)
- [Affected Apps](#affected-apps)
- [Gitlab CI](#gitlab-ci)

## Benefits

- Quickstart a project in seconds and focus on features, not on frameworks or tools
- Scalable architecture with base app template including example components, services and tests

## Libraries

- [Angular](https://angular.io/)
- [Angular-cli](https://github.com/angular/angular-cli)
- [Nx Workspace](https://nrwl.io/nx)
- [Node.js](https://nodejs.org/en/)
- [express.js](https://expressjs.com/)
- [Lodash](https://lodash.com)
- [Nest.js](https://nestjs.com/)
- [Bulma](http://bulma.io/)
- [Normalize.css](http://necolas.github.io/normalize.css/)
- [Sass](http://sass-lang.com/)
- [Jest](https://jestjs.io/)
- [TestCaffe](https://devexpress.github.io/testcafe/)

### Coding guides

- [Angular](docs/coding-guides/angular.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [Sass](docs/coding-guides/sass.md)
- [HTML](docs/coding-guides/html.md)
- [Unit tests](docs/coding-guides/unit-tests.md)
- [End-to-end tests](docs/coding-guides/e2e-tests.md)

### Other documentation

- [I18n guide](docs/i18n.md)
- [Working behind a corporate proxy](docs/corporate-proxy.md)
- [Updating dependencies and tools](docs/updating.md)
- [Using a backend proxy for development](docs/backend-proxy.md)
- [Browser routing](docs/routing.md)

## Project Setup

1. Clone this repo.
2. Run `yarn install` to install dependencies.

### Development server

Run `yarn serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Run with proxy

1. Run `yarn start:proxy` to build the project for development and serve with proxy config.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

To build only the changed files since the last build run:

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Gitlab CI

- In `.ci` folder are two prepared files for Heroku and AWS deploy. You can choose one of these.
