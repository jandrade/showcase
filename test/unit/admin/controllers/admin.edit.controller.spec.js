/* globals describe, beforeEach, it, expect, inject, VehicleMock, AdminMock */
describe('Admin > Vehicles Edit Controller', function(){
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

		scope = $rootScope.$new();

		Showcase = _Showcase_;

		// Create the controller
		controller = $controller('adminEditController', {
			$scope: scope,
			vehicleData: VehicleMock.DETAIL
		});

		$rootScope.compareItems = [];
	}));

	it('should be an invalid form', function() {
		var isValid = controller.submit(false);
		expect(isValid).toBe(false);
	});

	it('should edit a vehicle', function() {
		$httpBackend.whenPUT(Showcase.API + 'vehicles/1').respond(200, AdminMock.SUCCESS);
		// set form data
		controller.data = angular.copy(AdminMock.CREATE);
		controller.data._id = 1;
		// submit form
		controller.submit(true);
		// call service
		$httpBackend.flush();
		$timeout.flush();
		expect(controller.updated).toBe(true);
	});

	it('shouldn\'t edit a vehicle', function() {
		$httpBackend.whenPUT(Showcase.API + 'vehicles/1').respond(200, AdminMock.ERROR);
		// set form data
		controller.data = angular.copy(AdminMock.CREATE);
		controller.data._id = 1;
		// submit form
		controller.submit(true);
		$httpBackend.flush();
		expect(controller.updated).toBe(false);
	});
});