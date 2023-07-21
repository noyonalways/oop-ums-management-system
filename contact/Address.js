/* In the given code, `const _id = Symbol("id");` and similar lines are creating unique symbols for
each property of the Address class. */
const _id = Symbol("id");
const _roadNo = Symbol("raodNo");
const _city = Symbol("city");
const _region = Symbol("region");
const _country = Symbol("country");
const _postalCode = Symbol("postalCode");


class Address {
	static className = "ADDRESS";

	/**
	 * The constructor function takes in an object with properties for id, roadNo, city, region, country,
	 * and postalCode, and assigns them to private variables.
	 */
	constructor({ id, roadNo, city, region, country, postalCode }) {
		this[_id] = id;
		this[_roadNo] = roadNo || "";
		this[_city] = city || "";
		this[_region] = region || "";
		this[_country] = country || "";
		this[_postalCode] = postalCode || "";
	}

	// Getters
	/* The code block you provided is defining getter methods for the properties `id`, `roadNo`, `city`,
	`region`, `country`, and `postalCode` of the `Address` class. */
	get id() {
		return this[_id];
	}
	get roadNo() {
		return this[_roadNo];
	}
	get city() {
		return this[_city];
	}
	get region() {
		return this[_region];
	}
	get country() {
		return this[_country];
	}
	get postalCode() {
		return this[_postalCode];
	}

	// Setters
	/* The code block you provided is defining setter methods for the properties `roadNo`, `city`,
	`region`, `country`, and `postalCode` of the `Address` class. */
	set roadNo(value) {
		this[_roadNo] = value;
	}
	set city(value) {
		this[_city] = value;
	}
	set region(value) {
		this[_region] = value;
	}
	set country(value) {
		this[_country] = value;
	}
	set postalCode(value) {
		this[_postalCode] = value;
	}

	// methods
	/**
	 * The toString() function returns a string representation of an object's properties.
	 * @returns The toString() method is returning a string representation of an object's properties,
	 * including ID, RoadNo, City, Region, Country, and PostalCode.
	 */
	toString() {
		return `
        ID: ${this[_id]},
        RoadNo: ${this[_roadNo]},
        City: ${this[_city]},
        Region: ${this[_region]},
        Country: ${this[_country]},
        PostalCode: ${this[_postalCode]}
        `;
	}
}


module.exports = Address;