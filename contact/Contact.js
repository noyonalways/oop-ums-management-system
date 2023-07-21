const _id = Symbol("id");
const _phone = Symbol("phone");
const _email = Symbol("email");
const _alternativePhone = Symbol("alternativePhone");
const _address = Symbol("address");

class Contact {
	static className = "CONTACT";

	/**
	 * The constructor function initializes an object with properties for id, email, phone, alternativePhone, and address.
	 */
	constructor({ id, email, phone, alternativePhone, address }) {
		this[_id] = id;
		this[_email] = email || "";
		this[_phone] = phone || "";
		this[_alternativePhone] = alternativePhone || "";
		this[_address] = address || null;
	}

	// Getters
	/* The `get` methods in the `Contact` class are getter methods for the `id`, `email`, `phone`,
	`alternativePhone`, and `address` properties. */
	get id() {
		return this[_id];
	}

	get email() {
		return this[_email];
	}

	get phone() {
		return this[_phone];
	}

	get alternativePhone() {
		return this[_alternativePhone];
	}

	get address() {
		return this[_address];
	}

	// Setters
	/* The `set` methods in the `Contact` class are setter methods for the `email`, `phone`,
	`alternativePhone`, and `address` properties. */
	set email(value) {
		this[_email] = value;
	}

	set phone(value) {
		this[_phone] = value;
	}

	set alternativePhone(value) {
		this[_alternativePhone] = value;
	}

	set address(value) {
		this[_address] = value;
	}

    // methods
	/**
	 * The above function returns a string representation of an object's properties.
	 * @returns The toString() method is returning a string representation of an object, which includes
	 * the ID, email, phone, alternative phone, and address properties.
	 */
	toString() {
		return `
        ID: ${this[_id]},
        Email: ${this[_email]},
        Phone: ${this[_phone]},
        AlternativePhone: ${this[_alternativePhone]},
        Address: ${this[_address]},
        `;
	}
}


module.exports = Contact;