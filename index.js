const { Guardian } = require("./person");
const { Contact, Address } = require("./contact");

const g = new Guardian(1, "Mr Khaled", "Doctor", 70000);
g.blood = "O+";
g.contact = new Contact({
	id: 1,
	email: "khaled@gmail.com",
	phone: "+8801705645434",
	alternativePhone: "+8801712345678",
});

g.contact.address = new Address({
	id: 1,
	roadNo: "1730, Dhaka",
	city: "Dhaka",
	region: "Asia",
	country: "Bangladesh",
	postalCode: "1730",
});

console.log(g.contact + "");
