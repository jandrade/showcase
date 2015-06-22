#Showcase

A Showcase Demo built with AngularJS, LESS and Gulp

##Table of Contents
1. Instalation
2. Tech Stack
3. Build Process
4. App Structure
5. Testing
6. Routes
7. API

-----------------------------------

## 1. Instalation

Run the following commands:

1. `cd showcase`

2. `sudo npm run install`

3. `bower install`

4. `gulp serve`

5. Navigate to: `http://localhost:3000`

--------------------------------------

## 2. Tech Stack

### Front End
- AngularJS
	- angular-route
	- angular-animate
- Bootstrap

### Building
- Gulp // requires nodeJS
- Karma
- Jasmine
- Protractor

### Back End
- Node JS
	- express
	- mongoose
- MongoDB


-------------------------------------


## 3. Build Process

### Default task
`gulp`

### Javascript minification
`gulp js`

### Javascript linting
`gulp jshint`

### Generate CSS compiled file
`gulp css`

### Watch files for changes and reload
`gulp serve`

### Watch for file changes

If you want to have the latest version of the code in the browser, make sure to run this command:

`gulp watch`

This will be watching for changes in LESS files.

### Inject required JS files
`gulp inject`

### Run tests

`gulp test`

`gulp test:unit` (only unit tests)

`gulp test:e2e` (only End2End tests)

### Building

`gulp build:prod` (Builds the project and copy required files to the production environment)

### Angular Generator

`gulp ng -a` (Creates an Angular Application)

`gulp ng -m` (Creates an Angular Module)

`gulp ng -d` (Creates an Angular Directive)

`gulp ng -c` (Creates an Angular Controller)

`gulp ng -f` (Creates an Angular Factory)


---------------------------------------

## 4. App Structure

```
|- api/ (Back End API built with NodeJS/Express) In progress
|- app/ (frontend application - development environment)
|	|- api/	(dummy API - mock services)
|	|- assets (static files)
|	|	|- css
|	|	|- fonts (Icon Fonts)
|	|	|- img
|	|	|- js
|	|	|	|- (put custom JS code here - not required by the Angular App)
|	|- bower_components (third-pary libraries)
|	|- js
|	|	|- modules (sub-systems)
|   |	|	|- app (App configuration and running)
|   |	|	|	|- sc.app.js (App initialization)
|   |	|	|	|- sc.config.js (Global configuration)
|   |	|	|	|- constants.js (Global constants)
|   |	|	|- vehicles
|   |	|	|	|- config (module configuration)
|   |	|	|	|- controllers (vehicle controllers)
|   |	|	|	|- directives (vehicle components)
|   |	|	|	|- factories (vehicle API integration)
|   |	|	|	|- vehicles.module.js (module definition)
|	|- less (source LESS files)
|	|	|- base
|	|	|	|- base.less (base tags)
|	|	|	|- fonts.less (Web fonts / icon fonts)
|	|	|	|- layout.less (Master layout)
|	|	|- common (shared UI components)
|	|	|	|- animations.less
|	|	|	|- forms.less
|	|	|- config
|	|	|	| - mixins.less (helpers)
|	|	|	| - vars.less
|	|	|- elements (Custom elements)
|	|	|	|- buttons.less
|	|	|	|- forms.less
|   |   |- layout (master layout)
|   |   |   |- footer.less
|   |   |   |- header.less
|   |   |   |- layout.less
|   |   |   |- nav.less
|	|	|- views
|	|	|	|- vehicles
|	|	|	|	|- index.less
|	|	app.less (main LESS file)
|	|- views (HTML Partials)
|	|	|- common
|	|	|- module
|	|- index.html
|- gulp-tasks/	(Build tasks)
|- public/	(frontend application - production env)
|	|- assets (compiled files here)
|	|	|- css
|	|	|	|- app.css
|	|	|	|- app.min.css
|	|	|	|- app.min.css.map
|	|	|- fonts (Icon Fonts)
|	|	|	|- app.eot
|	|	|	|- app.svg
|	|	|	|- app.ttf
|	|	|	|- app.woff
|	|	|- img
|	|	|- js
|	|	|	|- app.js
|	|	|	|- app.min.js
|	|	|	|- app.min.js.map
|	|	|	|- templates.js
|	|- index.html
|- test/	(Unit / E2E testing)
|- bower.json
|- gulpfile.js
|- package.json
```

---------------------------------------

## 5. Testing (Unit Testing, e2e)

To run tests, you should run the following command in your terminal:

`gulp test`

### Unit Testing
<https://docs.angularjs.org/guide/unit-testing>

We use Jasmine to perform unit testing in our app. If you want to run only unit testing, use:

`gulp test:unit`

After running it, you can see the results of the code coverage inside `/test/coverage/`.

### e2e (End to End) In Progress
<https://docs.angularjs.org/guide/e2e-testing>

We use Protractor to perform e2e testing in our app. If you want to run only e2e, use:

`gulp test:e2e`

NOTE: To run this e2e tests, you must have installed selenium in your computer.


---------------------------------------

## 6. Routes

These are the available routes for the application.

```
/#/					[Homepage]
/#/vehicles/:id		[Vehicle details]
/#/compare?id=:ids	[Compare vehicles]
```

---------------------------------------

## 7. API

```
[GET]	/api/vehicles  (Get all vehicles)
[GET]	/api/vehicles/:id  (Gets a selected vehicle)
[GET]	/api/compare/?id=:id  (Compare a list of vehicles)
```

----------------------------------------

##License

MIT © [Juan David Andrade](http://jdandrade.com/)