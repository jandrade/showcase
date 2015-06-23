/**
 * @fileOverview Admin index controller
 *
 * @description Shows a list of available vehicles
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 *
 * ROUTE: /#/admin/
 */
(function(angular){
'use strict';

	/* @ngInject */
	function adminIndexController($scope, $rootScope, vehicles, $location, $timeout, adminVehicles, vehiclesCollection) {
		/* jshint validthis:true */
		var vm = this;

		/**
		 * Removes a vehicle from the list
		 * @param  {String} id - The vehicle identifier
		 * @return {Boolean}    removed?
		 */
		function removeItem(id) {
			var i = 0,
				removed = false,
				numItems = vm.items.length;

			// loop into items to get the removed one
			for ( i = 0; i < numItems; i++) {
				if (parseInt(vm.items[i]._id) === parseInt(id)) {
					vm.items.splice(i, 1);
					removed = true;
					break;
				}
			}

			return removed;
		}

		/**
		 * Removes a vehicle from the view
		 * @param  {String} id - The vehicle identifier
		 */
		vm.remove = function(id) {
			// delete vehicle
			adminVehicles.remove(id).then(function(response) {
				if (response && response.success) {

					$rootScope.flashMessage = 'Vehicle Deleted: ' + id;

					// remove item from Vehicles Collection (model)
					var removed = removeItem(id);

					if (removed) {
						$timeout(function() {
							$scope.$apply();
						}, 0);
					}



					$timeout(function() {
						$rootScope.flashMessage = '';
					}, 2000);
				} else {
					alert("Error deleting data. Please try again.");
				}
			});
		};

		/**
		 * @constructs adminIndexController
		 */
		(function init() {
			vm.items = vehiclesCollection;
		})();
	}

	angular
		.module('sc.admin')
		.controller('adminIndexController', adminIndexController);
})(angular);