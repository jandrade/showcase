/* globals describe, beforeEach, it, expect, inject, VehicleMock */
describe('Vehicles Detail Controller', function(){
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

		$httpBackend.whenGET(Showcase.API + 'vehicles/1').respond(200, VehicleMock.DETAIL);

		scope = $rootScope.$new();

		// Create the controller
		controller = $controller('vehiclesDetailController', {
			$scope: scope,
			vehicleData: VehicleMock.DETAIL
		});

		$rootScope.compareItems = [];
	}));

	it('should load the correct id', function() {
		expect(controller.item._id).toEqual('1');
	});

	it('should add to compare', function() {
		controller.compare();
		scope.$digest();
		expect(controller.checked).toBe(false);
	});
});