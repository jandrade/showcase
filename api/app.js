/**
 * @fileOverview API server
 *
 * @description Showcase API
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 *
 */
(function() {
	'use strict';
	/**
	 * Imports
	 */
	var express = require('express'),
		mongoose = require('mongoose'),
		cors = require('cors'),
		bodyParser = require('body-parser'),
		vehicles = require('./routes/vehicles'),
	/**
	 * Server variables
	 */
		app = express(),
		server,
		port = process.env.PORT || 3000;

	// connect to database
	mongoose.connect('mongodb://localhost/showcase');

	// configure express
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	app.use(cors());

	/**
	 * Server started correctly
	 */
	function started() {
		console.log('Showcase API listening at http://%s:%s', server.address().address, server.address().port);
	}

	// start server
	server = app.listen(port, started);

	// register routes
	app.use('/api', vehicles);
})();