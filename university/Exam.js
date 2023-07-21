const _id = Symbol("id");
const _name = Symbol("name");
const _passMark = Symbol("passMark");
const _subject = Symbol("subject");

class Exam {
	static className = "EXAM";

	constructor(id, name, passMark, subject) {
		this[_id] = id;
		this[_name] = name;
		this[_subject] = subject;
		this[_passMark] = passMark || 33;
	}

	// Getters
	get id() {
		return this[_id];
	}
	get name() {
		return this[_name];
	}
	get subject() {
		return this[_subject];
	}
	get passMark() {
		return this[_passMark];
	}

	// Setters
	set name(value) {
		this[_name] = value;
	}
	set subject(value) {
		this[_subject] = value;
	}
	set passMark(value) {
		this[_passMark] = value;
	}

	// methods
	toString() {
		return `
        ID: ${this[_id]},
        Name: ${this[_name]},
        Subject: ${this[_subject]},
        PassMark: ${this[_passMark]}`;
	}
}

module.exports = Exam;
