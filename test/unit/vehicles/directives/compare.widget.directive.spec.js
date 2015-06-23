/* globals describe, beforeEach, it, expect, inject, VehicleMock */
describe("Compare Widget Directive", function() {
	'use strict';

	var scope,
		controller,
		element;

	// Load the main module
	beforeEach(module('sc'));
	beforeEach(module('sc.vehicles'));

	// The external template file referenced by templateUrl
	beforeEach(module('views/vehicles/directives/compare.widget.html'));


	beforeEach(inject(function($compile, $rootScope) {

		scope = $rootScope.$new();

		// assign object to directive
		scope.items = [1,2,3];

		// default element
		element = angular.element('<div compare-widget items="items"></div>');
		$compile(element)(scope);

		// executes directive
		scope.$digest();

		controller = element.controller('compareWidget');
	}));

	/**
	 * Script Directive
	 */
	it("should have enabled the compare button", function() {
		var button = element.find('a');
		expect(button.hasClass('disabled')).toBe(false);
	});

	it("should load compare page", function() {
		var button = element.find('a');
		button.click();
		expect(controller.load()).toBe('1,2,3');
	});
});