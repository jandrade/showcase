/* globals describe, beforeEach, it, expect, inject, vehicles, VehicleMock */
describe("Vehicles Service", function() {
	'use strict';
	var $httpBackend,
		vehicles,
		request;

	// Load the main module
	beforeEach(module('sc'));

	beforeEach(inject(function($injector, _vehicles_) {
		$httpBackend = $injector.get('$httpBackend');
		vehicles = _vehicles_;

		request = $httpBackend.whenGET('/api/vehicles/all').respond(200, VehicleMock.ALL);

		$httpBackend.whenGET('/api/vehicles/1').respond(200, VehicleMock.DETAIL);

		$httpBackend.whenGET('/api/vehicles/compare?id=1').respond(200, VehicleMock.COMPARE);
	}));

	it("should return 4 vehicles", function() {
		vehicles.getAll().then(function(response) {
			expect(response.length).toEqual(4);
		});

		$httpBackend.flush();
	});

	it("should return Toyota as the first Brand", function() {
		vehicles.getAll().then(function(response) {
			expect(response[0].brand).toEqual('Toyota');
		});

		$httpBackend.flush();
	});

	it("should return a 404 error", function() {
		request.respond(404, {error: true});

		$httpBackend.expectGET('/api/vehicles/all');

		vehicles.getAll().catch(function(error) {
			expect(error.error).toBe(true);
		});

		$httpBackend.flush();
	});

	it("should return vehicle detail", function() {
		vehicles.get(1).then(function(response) {
			expect(response.model).toEqual('Avalon');
		});

		$httpBackend.flush();
	});

	it("should compare 3 vehicles", function() {
		vehicles.compare(1,2,3).then(function(response) {
			expect(response.length).toEqual(2);
		});

		$httpBackend.flush();
	});
});