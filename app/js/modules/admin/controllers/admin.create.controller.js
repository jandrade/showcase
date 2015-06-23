/**
 * @fileOverview adminCreate controller
 *
 * @description
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 *
 * ROUTE: /#/sc.admin/adminCreate
 */
(function(angular){
'use strict';

	/* @ngInject */
	function adminCreateController($rootScope, $timeout, $location, adminVehicles) {
		/* jshint validthis:true */
		var vm = this;

		/**
		 * Vehicle added
		 * @type {Boolean}
		 */
		vm.created = false;

		/**
		 * Form submitted
		 * @param  {Boolean}
		 * @return {Boolean} Is valid?
		 */
		vm.submit = function(isValid) {
			// is valid
			if (isValid) {
				// save data
				adminVehicles.create(vm.data).then(function(response) {
					if (angular.isDefined(response) && response.success) {
						$rootScope.flashMessage = 'Created: ' + response._id;

						vm.data.id = response._id;
						vm.created = true;

						$location.path('/admin/');

						$timeout(function() {
							$rootScope.flashMessage = '';
						}, 2000);
					} else {
						vm.created = false;
						alert("Error saving data. Please try again.");
					}
				});
			// error
			}

			return isValid;
		};

		/**
		 * @constructs adminCreateController
		 */
		(function init() {

		})();
	}

	angular
		.module('sc.admin')
		.controller('adminCreateController', adminCreateController);
})(angular);