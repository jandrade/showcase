/**
 * @fileOverview Card Directive
 * Displays a given card within a grid/list of vehicles
 *
 * @author juan.andrade
 */
(function(){
'use strict';

	/* @ngInject */
	function CardDirective() {

		function CardLink(scope, element) {

			(function init () {
				if (''+scope.item.deal === '1') {
					$(element).find('.tooltip-trigger').tooltip();
				}
			})();
		}

		function CardController($scope, localStorageService) {
			var card = this;

			card.checked = false;

			card.compare = function(value) {
				$scope.onChange({
					item: value,
					checked: card.checked
				});
			};

			/**
			 * @constructs VehiclesDetailController
			 */
			(function init() {
				if (localStorageService.get('compare')) {
					card.checked = localStorageService.get('compare').indexOf($scope.item.id) >= 0;
				}
			})();
		}

		return {
			restrict: 'A',
			link: CardLink,
			controller: CardController,
			controllerAs: 'card',
			templateUrl: 'views/vehicles/directives/card.html',
			replace: true,
			scope: {
				item: '=',
				onChange: '&'
			}
		};
	}

	angular
		.module('sc.vehicles')
		.directive('card', CardDirective);

})();