/**
 * Mocked objects
 */

var v1 = {
		"_id": "1",
		"model": "Avalon",
		"brand": "Toyota",
		"year": "2014",
		"color": "Red",
		"price": "15000",
		"thumb": "assets\/img\/vehicles\/toyota-avalon.jpg",
		"image": "assets\/img\/vehicles\/toyota-avalon-640-480.jpg",
		"deal": "0"
	},
	v2 = {
		"_id": "2",
		"model": "March",
		"brand": "Nissan",
		"year": "2014",
		"color": "Gray",
		"price": "12000",
		"thumb": "assets\/img\/vehicles\/transport-q-c-480-320-5.jpg",
		"image": "assets\/img\/vehicles\/transport-q-c-640-480-5.jpg",
		"deal": "1"
	},
	v3 = {
		"_id": "3",
		"model": "Diablo",
		"brand": "Lamborgini",
		"year": "2012",
		"color": "Purple",
		"price": "100000",
		"thumb": "assets\/img\/vehicles\/transport-q-c-480-320-3.jpg",
		"image": "assets\/img\/vehicles\/transport-q-c-640-480-3.jpg",
		"deal": "0"
	},
	v4 = {
		"_id": "4",
		"model": "Cooper",
		"brand": "Mini",
		"year": "2010",
		"color": "Blue",
		"price": "30000",
		"thumb": "assets\/img\/vehicles\/transport-q-c-480-320-8.jpg",
		"image": "assets\/img\/vehicles\/transport-q-c-640-480-8.jpg",
		"deal": null
	};

window.VehicleMock = {
	/**
	 * all vehicles
	 * @type {Array}
	 */
	ALL: [v1, v2, v3, v4],
	/**
	 * A selected vehicle
	 * @type {Object}
	 */
	DETAIL: v1,
	/**
	 * List of vehicles to be compared
	 * @type {Array}
	 */
	COMPARE: [v1, v2, v3]
};