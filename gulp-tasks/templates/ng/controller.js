/**
 * @fileOverview <%= componentName %> controller
 *
 * @description
 *
 * @author <%= author %>
 *
 * ROUTE: /#/<%= moduleName %>/<%= componentName %>
 */
(function(angular){
'use strict';

	/* @ngInject */
	function <%= componentName %>Controller($scope) {
		/* jshint validthis:true */
		var vm = this;

		/**
		 * @constructs <%= componentName %>Controller
		 */
		(function init() {

		})();
	}

	angular
		.module('<%= moduleName %>')
		.controller('<%= componentName %>Controller', <%= componentName %>Controller);
})(angular);