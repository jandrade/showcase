/**
 * @fileOverview adminVehicles Factory
 * Manage the connection between the Backend(API) and the controllers
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 */
(function(){
'use strict';

	/* @ngInject */
	function adminVehicles($http, Showcase) {

		/**
		 * API response
		 */
		function getCompleteHandler(response) {
			return response.data;
		}

		/**
		 * Error retrieving data
		 */
		function getErrorHandler(error) {
			return error.data.error;
		}

		/**
		 * Create a new Vehicle
		 * @return {Promise}
		 */
		function create(data) {
			data.thumb = 'assets/img/vehicles/dummy-vehicle-480-320.jpg';
			data.image = 'assets/img/vehicles/dummy-vehicle-640-480.jpg';

			return $http.post(Showcase.API + 'vehicles', data)
				.then(getCompleteHandler)
				.catch(getErrorHandler);
		}

		/**
		 * Update vehicle
		 * @return {Promise}
		 */
		function update(data) {
			var id = data._id;

			delete data._id;

			return $http.put(Showcase.API + 'vehicles/' + id, data)
				.then(getCompleteHandler)
				.catch(getErrorHandler);
		}

		/**
		 * Delete vehicle
		 * @return {Promise}
		 */
		function remove(id) {
			return $http.delete(Showcase.API + 'vehicles/' + id)
				.then(getCompleteHandler)
				.catch(getErrorHandler);
		}

		return {
			create: create,
			remove: remove,
			update: update
		};
	}

	angular
		.module('sc.admin')
		.factory('adminVehicles', adminVehicles);
})();