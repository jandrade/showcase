/**
 * @fileOverview Showcase Global Constants
 *
 * @description Constants required for this module
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 */
(function(angular){
'use strict';

	/**
	 * sc.vehicles Constants
	 */
	 var constant = {
	 	API: '/api/'
	 };

	// component definition
	angular
		.module('sc')
		.constant('Showcase', constant);

})(angular);