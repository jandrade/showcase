/* globals describe, beforeEach, it, expect, inject */
describe("Card Directive", function() {
	'use strict';

	var scope,
		controller,
		element;

	// Load the main module
	beforeEach(module('sc'));
	beforeEach(module('sc.vehicles'));

	// The external template file referenced by templateUrl
	beforeEach(module('views/vehicles/directives/card.html'));


	beforeEach(inject(function($compile, $rootScope) {

		scope = $rootScope.$new();

		var item = {
			"brand": "Toyota",
			"color": "Red",
			"deal": false,
			"_id": "1",
			"image": "assets/img/vehicles/toyota-avalon-640-480.jpg",
			"model": "Avalon",
			"price": "15000",
			"thumb": "assets/img/vehicles/toyota-avalon.jpg",
			"year": "2014"
		};

		// assign object to directive
		scope.item = item;

		// default element
		element = angular.element('<div card item="item">');
		$compile(element)(scope);

		// executes directive
		scope.$digest();

		controller = element.controller('card');
	}));

	/**
	 * Script Directive
	 */
	it("should uncheck the current card", function() {
		var checkbox = element.find('input');
		checkbox.click();
		expect(checkbox.prop('checked')).toBe(false);
		expect(controller.checked).toBe(false);
	});
});