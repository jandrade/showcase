/**
 * @fileOverview sc.admin Routes
 *
 * @description Configure routes for this module
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 */
(function(angular){
'use strict';

	/**
	 * sc.admin Configuration
	 */

	/* @ngInject */
	function config($routeProvider) {

		// define routes
		$routeProvider
			// Admin Vehicles
			.when('/admin/', {
				controller: 'adminIndexController',
				controllerAs: 'vm',
				resolve: {
					vehiclesCollection: function(vehicles) {
						return vehicles.getAll();
					}
				},
				templateUrl: 'views/admin/controllers/admin.index.html'
			})
			.when('/admin/vehicles/add', {
				controller: 'adminCreateController',
				controllerAs: 'vm',
				templateUrl: 'views/admin/controllers/admin.form.html'
			})
			.when('/admin/vehicles/:id', {
				controller: 'adminEditController',
				controllerAs: 'vm',
				resolve: {
					vehicleData: function(vehicles, $route) {
						return vehicles.get($route.current.params.id);
					}
				},
				templateUrl: 'views/admin/controllers/admin.form.html'
			})
			.otherwise({ redirectTo: '/' });
	}

	/**
	 * sc.admin Run Block - Module initialization
	 */

	/* @ngInject */
	function run() {
	}

	// component definition
	angular
		.module('sc.admin')
		.config(config)
		.run(run);

})(angular);