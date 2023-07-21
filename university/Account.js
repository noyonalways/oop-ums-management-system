const _id = Symbol("id");
const _type = Symbol("type");
const _amount = Symbol("amount");
const _time = Symbol("time");

class Account {
	static className = "ACCOUNT";

	constructor(id, type, amount, time) {
		this[_id] = id;
		this[_type] = type;
		this[_amount] = amount || 0;
		this[_time] = time || new Date();
	}

	// Getters
	get id() {
		return this[_id];
	}
	get type() {
		return this[_type];
	}
	get amount() {
		return this[_amount];
	}
	get time() {
		return this[_time];
	}

	// Setters
	set type(value) {
		this[_type] = value;
	}
	set amount(value) {
		this[_amount] = value;
	}
	set time(value) {
		this[_time] = value;
	}

	// methods

	toString() {
		return `
        ID: ${this[_id]},
        Type: ${this[_type]},
        Amount; ${this[_amount]},
        Time: ${this[_time]}`;
	}
}


module.exports = Account;