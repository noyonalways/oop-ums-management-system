const Employee = require("./Employee");

const _title = Symbol("subject");

class Stuff extends Employee {
	static className = "STUFF";

	constructor(id, name, title) {
		super(id, name);
		this[_title] = title;
	}

	// Getters
	get title() {
		return this[_title];
	}

	// Setters
	set title(value) {
		this[_title] = value;
	}

	// methods
	toString() {
		return `${super.toString()}, Title: ${this[_title]}`;
	}
}

module.exports = Stuff;
