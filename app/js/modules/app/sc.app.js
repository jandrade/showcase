/**
 * @fileOverview Showcase - App initialization
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 */
(function(angular){
	'use strict';

	/**
	 * sc Run Block
	 */

	/* @ngInject */
	function run($rootScope) {
		$rootScope.compareItems = [];
		$rootScope.flashMessage = '';
	}

	angular
		.module('sc',[
			'ngRoute',
			'ngAnimate',
			// third-party modules
			'LocalStorageModule', // https://github.com/grevory/angular-local-storage
			// app modules
			'sc.admin',
			'sc.vehicles'
		])
		.run(run);

})(angular);