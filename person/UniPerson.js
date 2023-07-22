const Person = require("./Person");

const _department = Symbol("department");
const _account = Symbol("account");

class UniPerson extends Person {
	static className = "UNIPERSON";

	constructor(id, name, department, account) {
		super(id, name);
		this[_department] = department || null;
		this[_account] = account || null;
	}

	// Getters
	get department() {
		return this[_department];
	}

	get account() {
		return this[_account];
	}

	// Setters
	set department(value) {
		this[_department] = value;
	}

	set account(value) {
		this[_account] = value;
	}

	// methods
	toString() {
		return `${super.toString()}, Department: ${this[_department]}, Account: ${
			this[_account]
		}`;
	}
}

module.exports = UniPerson;
