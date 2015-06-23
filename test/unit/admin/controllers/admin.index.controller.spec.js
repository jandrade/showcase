/* globals describe, beforeEach, it, expect, inject, VehicleMock */
describe('Admin > Vehicles Index Controller', function(){
	'use strict';

	var $httpBackend,
		$rootScope,
		$timeout,
		scope,
		Showcase,
		controller;

	beforeEach(module('sc'));
	beforeEach(module('sc.admin'));

	beforeEach(inject(function($injector, $controller, _$rootScope_, _Showcase_) {
		$rootScope = _$rootScope_;
		$httpBackend = $injector.get('$httpBackend');
		$timeout = $injector.get('$timeout');

		Showcase  = _Showcase_;

		scope = $rootScope.$new();

		// Create the controller
		controller = $controller('adminIndexController', {
			$scope: scope,
			vehiclesCollection: angular.copy(VehicleMock.ALL)
		});

		$rootScope.compareItems = [];
	}));

	it('should load four items', function() {
		expect(controller.items.length).toEqual(4);
	});

	it('should remove a vehicle', function() {
		$httpBackend.whenDELETE(Showcase.API + 'vehicles/1').respond(200, AdminMock.SUCCESS);
		controller.remove(1);
		$httpBackend.flush();
		$timeout.flush();
		expect(controller.items.length).toEqual(3);
	});

	it('shouldn\'t remove a vehicle', function() {
		$httpBackend.whenDELETE(Showcase.API + 'vehicles/1').respond(200, AdminMock.ERROR);
		controller.remove(1);
		$httpBackend.flush();
		expect(controller.items.length).toEqual(4);
	});
});