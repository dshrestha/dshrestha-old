# Dshrestha

This README outlines the details of collaborating on this Ember application.

A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## You might run into issues when running ember server. General errors and how I fixed them :

* In css, always use double quotes (") instead of single quote (') because
when the assets are compiled, it gets rid of single quotes making font names invalid in situation like these:
	font: 1.1em'colaborate thinregular';//before compilation
	font: 1.1emcolaborate thinregular;//after compilation

* cannot find module 'node_modules\broccoli-ember-hbs-template-compiler'
	* `npm install`
	* `bower install`

* cannot find module 'ember-cli/lib/broccoli/ember-app'
	* `npm install ember-cli --save`

* to update to latest version of ember data availble (http://stackoverflow.com/questions/25869180/how-to-update-ember-cli-app-to-ember-data-1-0-0-beta9)	
	* `npm uninstall ember-cli-ember-data --save-dev`
	* `npm install ember-data --save-dev`
