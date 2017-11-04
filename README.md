# Marley

Mini Starter Kit for complex web apps.

* Version 1.0.0

## Prerequisites and Main Libraries

* [Angular](https://angular.io/),
* [Angular-cli](https://github.com/angular/angular-cli),
* [Node.js](https://nodejs.org/en/),
* [koa.js](http://koajs.com/),
* [Webpack](https://webpack.js.org/),
* [Rollup.js](https://rollupjs.org/),
* [Bulma](http://bulma.io/),
* [Sass](http://sass-lang.com/),
* [Animate.css](https://github.com/daneden/animate.css).

## Project Setup

1. Clone this repo.
2. Run `npm install` to install dependencies.

## Web Development

### Development build and serve with live reload
1. Run `npm run serve` to build the project for development and serve.
2. Visit http://localhost:4200/. That's it!.

### Build for development

1. Run `npm run serve:dev` to build the project for development.
2. Visit http://localhost:3000/.

### Build for production

1. Run `npm run serve:prod` to build the project for production.
2. Visit http://localhost:3000/.

## Desktop Development

### Desktop development build

1. Run `npm run build:desktop`.
2. Run `npm run serve:electron`.

### Desktop production build

#### For MacOS 
1. Run `npm run package`.

#### For Windows
1. Run `npm run package:windows` or `package:windows:x64`.

#### For Linux
1. Run `npm run package:linux`.

## Code scaffolding
1. Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Running unit tests
1. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
1. Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
2. Before running the tests make sure you are serving the app via `npm run dev`.

## Lint

1. Run `npm run lint`.

## Analyze your bundle

1. Run `npm run analyzer` and visit http://localhost:8888/.

## Webpack dashboard

1. Run `npm run webpack-dashboard` and visit webpack dashboard output in terminal.