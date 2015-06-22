/**
 * @fileOverview Vehicle Model
 *
 * @description Vehicles Collection
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 *
 * @example
 * {
 * 		model: 'March',
 *		brand: 'Nissan',
 *		year: 2014,
 *		color: 'Gray',
 *		price: 13000,
 *		thumb: '/img/a.jpg',
 *		image: '/img/b.jpg',
 *		deal: false
 * }
 *
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var vehicleSchema = new Schema({
	model: String,
	brand: String,
	year: Number,
	color: String,
	price: Number,
	thumb: String,
	image: String,
	deal: Boolean
});

module.exports = mongoose.model('Vehicle', vehicleSchema);