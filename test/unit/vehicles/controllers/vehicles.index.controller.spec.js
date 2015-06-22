/* globals describe, beforeEach, it, expect, inject, VehicleMock */
describe('Vehicles Index Controller', function(){
	'use strict';

	var $httpBackend,
		$rootScope,
		scope,
		controller;

	beforeEach(module('sc'));
	beforeEach(module('sc.vehicles'));

	beforeEach(inject(function($injector, $controller, _$rootScope_) {
		$rootScope = _$rootScope_;
		$httpBackend = $injector.get('$httpBackend');

		$httpBackend.whenGET('/api/vehicles/compare?id=1').respond(200, VehicleMock.COMPARE);
		$httpBackend.whenGET('/api/vehicles/compare?id=1,2,3,4').respond(200, VehicleMock.COMPARE);

		scope = $rootScope.$new();

		$rootScope.flashMessage = '';

		// Create the controller
		controller = $controller('vehiclesIndexController', {
			$scope: scope,
			vehiclesCollection: VehicleMock.ALL
		});

		$rootScope.compareItems = [];
	}));

	it('should load four items', function() {
		expect(controller.items.length).toEqual(4);
	});

	it('should validate a comparison', function() {
		controller.compare(controller.items[0], true);
		scope.$digest();
		expect($rootScope.flashMessage).toEqual('');
	});

	it('should uncheck the first vehicle', function() {
		controller.compare(controller.items[0], false);
		scope.$digest();
		expect($rootScope.flashMessage).toEqual('');
	});

	it('should trhow a validation error (max 3 items allowed)', function() {
		controller.compare(controller.items[0], true);
		controller.compare(controller.items[1], true);
		controller.compare(controller.items[2], true);
		controller.compare(controller.items[3], true);
		scope.$digest();
		expect($rootScope.flashMessage).toEqual('You can only select up to 3 vehicles to compare.');
	});
});