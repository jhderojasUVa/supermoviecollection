# theSuper Movie Collection

This is the Movie Colletion test result.

It's a very easy app that have a list of movies and you can search one in particular for viewing the details of it. Nothing more.

## How it's made

Based on Angular and Bootstrap, no Redux it's needed thanks that there's no Rest or no need to add or delete movies, so it can be done simply reading the faux data and displaying it.

Bootstrap is used for responsive but it's added some custom css to be more like a videoclub style. That means that the app it's similar like the old fashion videoclubs app with their blue background and style. I think it's the best style for this :)

Remember that the solution is not unique. Everything can be done in several ways.

## Components

There is only two components after the main one:

movielistcomponent - which is the component for searching one movie from the title.

moviedetailcomponent - which will show the detail of the components.

In order to be a OSP (One Single Page application) Router from Angular is used in order to move from the movielistcomponent to the moviedetailcomponent.

The moviedetailcomponent need the id and the key of the movie because in the faux data I have detected two movies with the same id, so the best way to be "unique" it's to use the key, but if it's not unique for any reason, the id will help too.

The app.component it's needed only for the router outlet, nothing more. It's considered the main one.

The usual elements like the title of the app, bootstrap (from CDN) and so it's on the index.html, as must be. Only in the components are the components data. The app.component can be "deleted" with some minor changes. Only putting the router into the index.html and changing the app.module the bootstrap one. Nothing important.

## Model

Inside the model directory it's the faux data (model.mock-data) and the definitions of the genres (movie.model). The model can be inserted as a provider but I haven't done it. Inserting it as a provider ensures that the model is the same for all the components as a singleton. It's other way.

## Assets

All the cover files are on the assets directory inside images/movie-covers.

## How to run

As a typical quickstart Angular app, there is several ways to run it.

1- npm install (for downloading all the extra js files) -> npm serve

2- npm build (and take the build to your server)

For testing pruposes it will be nice to take the first option.

There is some "vulnerability problems". It means that some of the dependencies are old and have vulnerabilities. I have fixed the most important ones but not all. I'm not sure if this is part of the test or not (really). So, the best way it's not to touch it but say it.

## Prerequisites

Node.js and npm are essential to Angular development.

<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.

**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command first compiles the application,
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run build` - runs the TypeScript compiler once.
* `npm run build:watch` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run serve` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
## Unit Tests
TypeScript unit-tests are usually in the `src/app` folder. Their filenames must end in `.spec.ts`.

Look for the example `src/app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick.
