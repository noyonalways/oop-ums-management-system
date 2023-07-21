/* The code is creating four symbols `_id`, `_name`, `_blood`, and `_contact` using the `Symbol`
function. Symbols are unique and immutable values that can be used as property keys. In this case,
the symbols are used as private properties for the `Person` class. By using symbols, these
properties cannot be accessed or modified directly from outside the class. They can only be accessed
and modified through the getter and setter methods defined in the class. */
const _id = Symbol("id");
const _name = Symbol("name");
const _blood = Symbol("blood");
const _contact = Symbol("contact");

class Person {
	static className = "PERSON"

	/**
	 * The constructor function creates an object with properties for id, name, blood type, and contact
	 * information.
	 * @param id - The id parameter is used to store the unique identifier for an object. It can be any
	 * value that uniquely identifies the object, such as a number or a string.
	 * @param name - The name parameter is used to store the name of the object being created.
	 */
	constructor(id, name) {
		this[_id] = id;
		this[_name] = name;
		this[_blood] = null;
		this[_contact] = null;
	}

	// Getters
	/* The `get` methods in the `Person` class are getter methods for the `id`, `name`, `blood`, and
	`contact` properties. They are used to retrieve the values of these properties when called. */
	get id() {
		return this[_id];
	}

	get name() {
		return this[_name];
	}

	get blood() {
		return this[_blood];
	}

	get contact() {
		return this[_contact];
	}

	// Setters
	/* The `set` methods in the `Person` class are setter methods for the `name`, `blood`, and `contact`
	properties. They are used to set the values of these properties when called. */
	set name(value) {
		this[_name] = value;
	}

	set blood(value) {
		this[_blood] = value;
	}

	set contact(value) {
		this[_contact] = value;
	}

    // methods
    /**
	 * The toString function returns a string representation of an object's id, name, and blood
	 * properties.
	 * @returns The `toString()` method is returning a string that includes the values of the `id`,
	 * `name`, and `blood` properties of the object.
	 */
	toString(){
        return `id: ${this[_id]}, name: ${this[_name]}, ${this[_blood]}`
    }
}

module.exports = Person;
