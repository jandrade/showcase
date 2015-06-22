/**
 * @fileOverview Vehicle Detail controller
 *
 * @description This controller makes the following operations
 * 1. Loads a vehicle given a selected ID.
 * 2. Render the vehicle into the DOM.
 *
 * @author juan.andrade
 *
 * ROUTE: /#/vehicles/:id
 */
(function(angular){
'use strict';

	/* @ngInject */
	function vehiclesDetailController($rootScope, $routeParams, localStorageService, vehicles, vehicleData) {
		/* jshint validthis:true */
		var detail = this;

		/**
		 * Add remove items
		 */
		detail.compare = function() {
			vehicles.validate(detail.item, detail.checked);
		};

		/**
		 * @constructs VehiclesDetailController
		 */
		(function init() {
			// set details
			detail.item = vehicleData;
			detail.image = vehicleData.image;

			// verify if the current vehicle has been already checked
			if (localStorageService.get('compare')) {
				detail.checked = localStorageService.get('compare').indexOf(vehicleData.id) >= 0;
			}

			// filter columns
			detail.specs = {
				brand: vehicleData.brand,
				model: vehicleData.model,
				color: vehicleData.color,
				price: vehicleData.price,
				year: vehicleData.year
			};
		})();
	}

	angular
		.module('sc.vehicles')
		.controller('vehiclesDetailController', vehiclesDetailController);
})(angular);