/**
 * @fileOverview sc.vehicles Routes
 *
 * @description Configure routes for this module
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 */
(function(angular){
'use strict';

	/**
	 * sc.vehicles Configuration
	 */

	/* @ngInject */
	function config($routeProvider) {

		// define routes
		$routeProvider
			.when('/', {
				controller: 'vehiclesIndexController',
				controllerAs: 'vm',
				resolve: {
					vehiclesCollection: function(vehicles) {
						return vehicles.getAll();
					}
				},
				templateUrl: 'views/vehicles/controllers/vehicles.index.html'
			})
			// Detail
			.when('/vehicles/:id', {
				controller: 'vehiclesDetailController',
				controllerAs: 'detail',
				resolve: {
					vehicleData: function(vehicles, $route) {
						return vehicles.get($route.current.params.id);
					}
				},
				templateUrl: 'views/vehicles/controllers/vehicles.detail.html'
			})
			// Compare
			.when('/compare', {
				controller: 'vehiclesCompareController',
				controllerAs: 'compare',
				resolve: {
					vehiclesCollection: function(vehicles, $route) {
						return vehicles.compare($route.current.params.id);
					}
				},
				templateUrl: 'views/vehicles/controllers/vehicles.compare.html'
			});
	}

	/**
	 * sc.vehicles Run Block - Module initialization
	 */

	/* @ngInject */
	function run() {
	}

	// component definition
	angular
		.module('sc.vehicles')
		.config(config)
		.run(run);

})(angular);