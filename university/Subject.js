const _id = Symbol("id");
const _name = Symbol("name");
const _credit = Symbol("credit");

class Subject {
	static className = "SUBJECT";

	constructor(id, name, credit) {
		this[_id] = id;
		this[_name] = name;
		this[_credit] = credit;
	}

	// Getters
	get id() {
		return this[_id];
	}
	get name() {
		return this[_name];
	}
	get credit() {
		return this[_credit];
	}

	// Setters
	set name(value) {
		this[_name] = value;
	}
	set credit(value) {
		this[_credit] = value;
	}

	// methods
	toString() {
		return `
        ID: ${this[_id]},
        Name: ${this[_name]},
        Credit: ${this[_credit]}`;
	}
}

module.exports = Subject;
