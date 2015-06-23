/**
 * @fileOverview adminEdit controller
 *
 * @description
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 *
 * ROUTE: /#/sc.admin/adminEdit
 */
(function(angular){
'use strict';

	/* @ngInject */
	function adminEditController($rootScope, $timeout, $location, adminVehicles, vehicleData) {
		/* jshint validthis:true */
		var vm = this;

		/**
		 * Vehicle updated
		 * @type {Boolean}
		 */
		vm.updated = false;

		/**
		 * Form submitted
		 * @param  {ngForm} $form
		 * @param  {Object} data  Model info
		 * @return {Boolean} Is valid?
		 */
		vm.submit = function(isValid) {
			// is valid
			if (isValid) {
				var id = angular.copy(vm.data._id);
				// save data
				adminVehicles.update(vm.data).then(function(response) {
					if (angular.isDefined(response) && response.success) {

						$rootScope.flashMessage = 'Updated: ' + id;

						vm.updated = true;

						$location.path('/admin/');

						$timeout(function() {
							$rootScope.flashMessage = '';
						}, 2000);
					} else {
						vm.updated = false;
						alert("Error saving data. Please try again.");
					}
				});
			// error
			}

			return isValid;
		};

		/**
		 * @constructs adminEditController
		 */
		(function init() {
			vm.data = vehicleData;
		})();
	}

	angular
		.module('sc.admin')
		.controller('adminEditController', adminEditController);
})(angular);