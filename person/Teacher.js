const Employee = require("./Employee");

const _subject = Symbol("subject");

class Teacher extends Employee {
	static className = "TEACHER";

	constructor(id, name, subject, employeeID) {
		super(id, name, employeeID);
		this[_subject] = subject;
	}

	// Getters
	get subject() {
		return this[_subject];
	}

	// Setters
	set subject(value) {
		this[_subject] = value;
	}

	// methods
	toString() {
		return `${super.toString()}, Subject: ${this[_subject]}`;
	}
}


module.exports = Teacher;