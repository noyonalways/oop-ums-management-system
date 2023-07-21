const Person = require("./Person");

const _profession = Symbol("profession");
const _income = Symbol("income");

class Guardian extends Person {
	static className = "GARDIAN";

	
	/**
	 * The above function is a constructor that takes in parameters for id, name, profession, and income
	 * and assigns them to the object being created.
	 * @param id - The id parameter is used to store the unique identifier of the object being created. It
	 * could be a number or a string, depending on how you want to identify your objects.
	 * @param name - The name parameter is a string that represents the name of the person.
	 * @param profession - The profession parameter is used to store the profession of the person. It
	 * could be a string representing their occupation or job title.
	 * @param income - The income parameter is the amount of money earned by the person in their
	 * profession.
	 */
	constructor(id, name, profession, income) {
		super(id, name);
		this[_profession] = profession;
		this[_income] = income;
	}

	// Getters
	/* The `get profession()` and `get income()` methods are getter methods for the `profession` and
	`income` properties of the `Guardian` class. */
	get profession() {
		return this[_profession];
	}

	get income() {
		return this[_income];
	}

	// Setters
	/* The `set profession(value)` and `set income(value)` methods are setter methods for the `profession`
	and `income` properties of the `Guardian` class. */
	set profession(value) {
		this[_income] = value;
	}

	set income(value) {
		this[_income] = value;
	}

	// methods
	/**
	 * The toString() function returns a string representation of an object, including its profession and
	 * income.
	 * @returns The `toString()` method is being overridden and it returns a string representation of the
	 * object. It includes the string representation of the superclass (using `super.toString()`),
	 * followed by the profession and income properties of the object.
	 */
	toString() {
		return `${super.toString()}, Profession: ${this[_profession]}, Income: ${
			this[_income]
		} `;
	}
}

module.exports = Guardian;
