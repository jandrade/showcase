/**
 * @fileOverview sc Configuration
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 */
(function(angular){
'use strict';

	/**
	 * sc Configuration
	 */

	/* @ngInject */
	function config($routeProvider, $httpProvider, localStorageServiceProvider) {
		$httpProvider.defaults.headers.common.Accept = 'application/json, text/javascript';
		$httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
		$httpProvider.defaults.useXDomain = true;

		// configure local storage
		localStorageServiceProvider.setPrefix('app.storage');
		localStorageServiceProvider.setStorageType('sessionStorage');
		localStorageServiceProvider.setNotify(true, true);

		// define routes
		$routeProvider
			.otherwise({ redirectTo: '/' });
	}

	// component definition
	angular
		.module('sc')
		.config(config);

})(angular);