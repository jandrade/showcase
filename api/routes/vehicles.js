/**
 * @fileOverview Vehicles Router
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 *
 */
'use strict';

/**
 * Imports
 */
var express = require('express'),
	router = express.Router(),
/**
 * Models
 */
	Vehicle = require('../models/vehicle');

/**
 * Routes
 */

/**
 * Find all vehicles
 *
 * ROUTE: [GET] /api/vehicles
 */
router.get('/vehicles', function (req, res) {
		Vehicle.find({}, function (err, data) {
			if (err) {
				res.send(err);
			}
			res.json(data);
	});

/**
 * Create a new vehicle
 *
 * ROUTE: [POST] /api/vehicles
 */
router.post('/vehicles', function (req, res) {
		var vehicle = new Vehicle(req.body);

		vehicle.save(function(err, data){
			if(err) {
				res.send({success: false, _id: data.id, error: err});
			}

			res.send({success: true});
		});
	});

router.route('/vehicles/\/([^\/]+)\/?/')
	/**
	 * Returns a selected vehicle
	 *
	 * ROUTE: [GET] /api/vehicles/:id
	 */
	.get(function (req, res) {
		Vehicle.findOne({_id:req.params[0]},function(err, vehicle) {
			if(err) {
				res.send({success: false, error: err});
			}

			res.json(vehicle);
		});
	})
	/**
	 * Update a selected vehicle
	 *
	 * ROUTE: [PUT] /api/vehicles/:id
	 */
	.put(function (req, res) {
		Vehicle.findOne({_id:req.params.id},function(err, vehicle){

			if(err) {
				res.send(err);
			}

			// loop into properties
			for(var prop in req.body){
				vehicle[prop] = req.body[prop];
			}

			// update the vehicle
			vehicle.save(function(err) {
				if (err) {
					res.send({success: false, error: err});
				}

				res.send({success: true});
			});

		});
	})
	/**
	 * Delete a selected vehicle
	 *
	 * ROUTE: [DELETE] /api/vehicles/:id
	 */
	.delete(function (req, res) {
		Vehicle.remove({
			_id: req.params.id
		}, function (err, vehicle) {
			if (err) {
				res.send({success: false, error: err});
			}

			res.json({success: true, id: vehicle.id});
		});
	});
});

/**
 * Returns a list of vehicles to be compared
 *
 * ROUTE: [GET] /api/vehicles/compare?id=:id
 */
router.route('/vehicles/compare/:id')
	.get(function (req, res) {
		Vehicle.find({
			_id: { $in: req.params.id.split(',') }
		},function(err, vehicle) {
			if(err) {
				res.send({success: false, error: err});
			}

			res.json(vehicle);
		});
	})

module.exports = router;