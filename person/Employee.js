const UniPerson = require("./UniPerson");

const _employeeID = Symbol("employeeID");
const _salary = Symbol("salary");

class Employee extends UniPerson {
	static className = "EMPLOYEE";

	constructor(id, name, employeeID) {
		super(id, name);
		this[_employeeID] = employeeID;
		this[_salary] = null;
	}

	// Getters
	get employeeID() {
		return this[_employeeID];
	}

	get salary() {
		return this[_salary];
	}

	// Setters
	set salary(value) {
		this[_salary] = value;
	}

	// methods
	toString() {
		return `${super.toString()}, EmployeeID: ${this[_employeeID]}, Salary: ${
			this[_salary]
		}`;
	}
}

module.exports = Employee;
