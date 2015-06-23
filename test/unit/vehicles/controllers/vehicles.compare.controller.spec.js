/* globals describe, beforeEach, it, expect, inject, VehicleMock */
describe('Vehicles Compare Controller', function(){
	'use strict';

	var $httpBackend,
		$rootScope,
		scope,
		controller;

	beforeEach(module('sc'));
	beforeEach(module('sc.vehicles'));

	beforeEach(inject(function($injector, $controller, _$rootScope_, Showcase) {
		$rootScope = _$rootScope_;
		$httpBackend = $injector.get('$httpBackend');

		$httpBackend.whenGET(Showcase.API + 'vehicles/compare?1,2,3').respond(200, VehicleMock.COMPARE);

		scope = $rootScope.$new();

		// Create the controller
		controller = $controller('vehiclesCompareController', {
			$scope: scope,
			vehiclesCollection: VehicleMock.COMPARE
		});
	}));

	it('should load 3 vehicles', function() {
		expect(controller.items.length).toEqual(3);
	});

	it('should remove the first item', function() {
		controller.remove(controller.items[0]);
		scope.$digest();
		expect(controller.items.length).toEqual(2);
	});
});