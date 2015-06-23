/* globals describe, beforeEach, it, expect, inject, VehicleMock, AdminMock */
describe('Admin > Vehicles Add Controller', function(){
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

		Showcase = _Showcase_;

		scope = $rootScope.$new();

		// Create the controller
		controller = $controller('adminCreateController', {
			$scope: scope
		});

		$rootScope.compareItems = [];
	}));

	it('should be an invalid form', function() {
		var isValid = controller.submit(false);
		expect(isValid).toBe(false);
	});

	it('should create a vehicle', function() {
		$httpBackend.whenPOST(Showcase.API + 'vehicles').respond(200, AdminMock.SUCCESS);
		// set form data
		controller.data = AdminMock.CREATE;
		// submit form
		controller.submit(true);
		// call service
		$httpBackend.flush();
		$timeout.flush();
		expect(controller.data._id).toEqual(AdminMock.CREATE._id);
		expect(controller.created).toBe(true);
	});

	it('shouldn\'t create a vehicle', function() {
		$httpBackend.whenPOST(Showcase.API + 'vehicles').respond(200, AdminMock.ERROR);
		// set form data
		controller.data = AdminMock.CREATE;
		// submit form
		var isValid = controller.submit(true);
		$httpBackend.flush();
		expect(controller.created).toBe(false);
	});
});