/**
 * @fileOverview compareWidget Directive
 *
 *
 * @author Juan David Andrade <juandavidandrade@gmail.com>
 */
(function(){
'use strict';

	/* @ngInject */
	function compareWidgetDirective() {

		/* @ngInject */
		function CompareController($scope, $location) {
			var compare = this;

			/**
			 * Show/hide widget
			 * @return {Boolean}
			 */
			compare.validate = function() {
				return $location.path() === '/' || /^\/vehicles/.test($location.path());
			};

			/**
			 * Go to compare section
			 */
			compare.load = function() {
				var ids = $scope.items.map(function(e) { return e.id; }).toString();

				$location.path('compare').search('id', ids);

				return ids;
			};

			/**
			 * @constructs CompareController
			 */
			(function init() {

			})();
		}
		return {
			restrict: 'A',
			controller: CompareController,
			controllerAs: 'compare',
			replace: true,
			scope: {
				items: '=',
				onChange: '&'
			},
			templateUrl: 'views/vehicles/directives/compare.widget.html'
		};
	}

	angular
		.module('sc.vehicles')
		.directive('compareWidget', compareWidgetDirective);

})();