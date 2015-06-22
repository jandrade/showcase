/**
 * @fileOverview Vehicle Index controller
 *
 * @description This controller makes the following operations:
 * 1. Load all vehicles and render them into the DOM
 * 2. Render the vehicles into the DOM.
 * 3. Filter vehicles by a given brand.
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 *
 * ROUTE: /#/
 */
(function(angular){
'use strict';

	/* @ngInject */
	function vehiclesIndexController($rootScope, $timeout, localStorageService, vehiclesCollection, vehicles) {
		/* jshint validthis:true */
		var vm = this;

		vm.compare = function(item, checked) {

			var filteredItems = vehicles.validate(item, checked);

			if (filteredItems.length > 3) {
				$rootScope.flashMessage = 'You can only select up to 3 vehicles to compare.';

				$timeout(function() {
					$rootScope.flashMessage = '';
				}, 2000);
				return;
			}
		};

		/**
		 * @constructs VehiclesIndexController
		 */
		(function init() {
			vm.items = vehiclesCollection;

			var compareItems = localStorageService.get('compare');

			if (compareItems && compareItems.length) {
				// get details
				vehicles.compare(compareItems.toString()).then(function(data) {
					$rootScope.compareItems = data || [];
				});
			}
		})();
	}

	angular
		.module('sc.vehicles')
		.controller('vehiclesIndexController', vehiclesIndexController);
})(angular);