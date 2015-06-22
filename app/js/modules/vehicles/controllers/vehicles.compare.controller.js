/**
 * @fileOverview Vehicle Detail controller
 *
 * @description This controller makes the following operations
 * 1. Loads a list of selected vehicles to be compared.
 * 2. Render vehicles into the DOM.
 *
 * @author juan.andrade
 *
 * ROUTE: /#/vehicles/:id
 */
(function(){
'use strict';

	/* @ngInject */
	function vehiclesCompareController($rootScope, $routeParams, $location, localStorageService, vehicles, vehiclesCollection) {
		/* jshint validthis:true */
		var compare = this;

		/**
		 * List of items to be compared
		 * @type {Array}
		 */
		compare.items = [];

		/**
		 * Remove vehicle from compare list
		 * @param  {Object} item - Checked vehicle
		 */
		compare.remove = function(item, index) {
			// substract IDs from each compared item
			var filteredItems = vehicles.validate(item, false);

			// update compare
			compare.items.splice(index, 1);

			// redirect to home
			if (filteredItems.length === 0) {
				$location.path('/');
			}
			//$location.path('compare').search('id', ids);
		};

		/**
		 * @constructs VehiclesCompareController
		 */
		(function init() {
			// set vehicles to be compared
			compare.items = vehiclesCollection;
		})();
	}

	angular
		.module('sc.vehicles')
		.controller('vehiclesCompareController', vehiclesCompareController);
})();