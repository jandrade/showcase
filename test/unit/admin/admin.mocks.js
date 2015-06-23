/**
 * Mocked objects
 */

window.AdminMock = {
	/**
	 * Success response
	 * @type {Object}
	 */
	SUCCESS: {
		success: true,
		_id: 1
	},
	/**
	 * Fail response
	 * @type {Object}
	 */
	ERROR: {
		success: false
	},
	/**
	 * Vehicle model
	 * @type {Object}
	 */
	CREATE: {
		"model":"Corsa",
		"brand":"Chevrolet",
		"year":"1998",
		"color":"White",
		"price":"10000",
		"thumb":"assets/img/vehicles/dummy-vehicle-480-320.jpg",
		"image":"assets/img/vehicles/dummy-vehicle-640-480.jpg",
		"deal": 1
	},
	/**
	 * Create Response
	 * @type {Object}
	 */
	CREATE_SUCCESS: {
		brand: "Chevrolet",
		color: "White",
		deal: 1,
		_id: "9",
		image: "assets/img/vehicles/dummy-vehicle-640-480.jpg",
		model: "Corsa",
		price: "10000",
		thumb: "assets/img/vehicles/dummy-vehicle-480-320.jpg",
		year: "1998"
	}
};