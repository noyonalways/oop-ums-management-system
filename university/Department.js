const _id = Symbol("id");
const _name = Symbol("name");
const _subjects = Symbol("subjects");
const _dean = Symbol("dean");
const _teachers = Symbol("teachers");

class Department {
	static className = "DEPARTMENT";

	constructor({ id, name, subjects, dean, teachers }) {
		this[_id] = id;
		this[_name] = name;
		this[_subjects] = subjects || [];
		this[_dean] = dean || null;
		this[_teachers] = teachers || [];
	}

	// Getters

	get id() {
		return this[_id];
	}
	get name() {
		return this[_name];
	}
	get subjects() {
		return this[_subjects];
	}
	get dean() {
		return this[_dean];
	}
	get teachers() {
		return this[_teachers];
	}

	// Setters

	set name(value) {
		this[_name] = value;
	}
	set subjects(value) {
		this[_subjects] = value;
	}
	set dean(value) {
		this[_dean] = value;
	}
	// set teachers(value) {
	// 	this[_teachers] = value;
	// }

	// methods
	addTeacher(teacher) {
		this[_teachers].push(teacher);
	}

	toString() {
		return `
        ID: ${this[_id]},
        Name: ${this[_name]},
		Subjects: ${this[_subjects]}`;
	}
}

module.exports = Department;
