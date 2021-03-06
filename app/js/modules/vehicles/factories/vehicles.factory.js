/**
 * @fileOverview vehicles Factory
 * Manage the connection between the Backend(API) and the controllers
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 */
(function(){
'use strict';

	/* @ngInject */
	function vehicles($http, $rootScope, localStorageService, Showcase) {

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
		 * Get data from API
		 * @return {Promise}
		 */
		function getAll() {
			return $http.get(Showcase.API + 'vehicles')
				.then(getCompleteHandler)
				.catch(getErrorHandler);
		}

		/**
		 * Get one vehicle
		 * @param {number} id - The vehicle ID
		 * @return {Promise}
		 */
		function get(id) {
			return $http.get(Showcase.API + 'vehicles/' + id)
				.then(getCompleteHandler)
				.catch(getErrorHandler);
		}

		/**
		 * Compare up to 3 vehicles
		 * @param {string} id - The vehicles to be compared
		 * @return {Promise}
		 */
		function compare(id) {
			return $http.get(Showcase.API + 'vehicles/compare/' + id)
				.then(getCompleteHandler)
				.catch(getErrorHandler);
		}

		/**
		 * Validate comparison
		 * @return {[type]} [description]
		 */
		function validate(item, checked) {
			// substract IDs from each compared item
			var filteredItems = $rootScope.compareItems.map(function(e) { return e._id; });

			if (checked) {
				$rootScope.compareItems.push(item._id);
			} else {
				var index = $rootScope.compareItems.indexOf(item._id);
				$rootScope.compareItems.splice(index, 1);
			}

			localStorageService.set('compare', $rootScope.compareItems);

			return filteredItems;
		}

		return {
			compare: compare,
			get: get,
			getAll: getAll,
			validate: validate
		};
	}

	angular
		.module('sc.vehicles')
		.factory('vehicles', vehicles);
})();