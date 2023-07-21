const UniPerson = require("./UniPerson");

const _studentID = Symbol("studentID");
const _guardian = Symbol("guradian");
const _exams = Symbol("exams");
const _fee = Symbol("fee");

class Student extends UniPerson {
	static className = "STUDENT";

	constructor(id, name, studentID, guardian) {
		super(id, name);
		this[_studentID] = studentID;
		this[_guardian] = guardian;
		this[_exams] = [];
		this[_fee] = null;
	}

	// Getters
	get studentID() {
		return this[_studentID];
	}

	get guardian() {
		return this[_guardian];
	}

	get exams() {
		return this[_exams];
	}

	get fee() {
		return this[_fee];
	}

	// Setters
	set exams(value) {
		this[_exams] = value;
	}

	set fee(value) {
		this[_fee] = value;
	}

	// methods
	addExam(exam) {
		this[_exams].push(exam);
	}

	toString() {
		return `${super.toString()}, StudentID: ${this[_studentID]}`;
	}
}

module.exports = Student;
