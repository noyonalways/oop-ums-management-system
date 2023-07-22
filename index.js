const { Guardian, Student, Teacher } = require("./person");
const { Contact, Address } = require("./contact");
const { Department, Account, Subject } = require("./university");

/**
 * Guardian ID: 1
 */
const guardian = new Guardian(1, "Mr Khaled", "Doctor", 70000);
guardian.blood = "O+";

/**
 * Contact ID: 1
 */
guardian.contact = new Contact({
	id: 1,
	email: "khaled@gmail.com",
	phone: "+8801711111111",
	alternativePhone: "+8801722222222",
});

/**
 * Address ID: 1
 */
guardian.contact.address = new Address({
	id: 1,
	roadNo: "1230, Dhaka",
	city: "Dhaka City",
	region: "Asia",
	country: "Bangladesh",
	postalCode: "1730",
});

/**
 * Student ID: 1
 */
const student = new Student(1, "Rafiq", "ST-001", guardian);
student.blood = "A+";
student.contact = new Contact({
	id: 2,
	email: "rafiq@gmail.com",
	phone: "+8801733333333",
	alternativePhone: student.guardian.contact.phone,
	address: student.guardian.contact.address,
});

/**
 * Department ID: 1
 */
const department = new Department({
	id: 1,
	name: "SWE",
});
student.department = department;

/**
 * Account ID: 1
 */
student.account = new Account(1, "Mobile Banking", 10000, new Date());

/**
 * Subject ID: 1
 */

department.subjects = [
	new Subject(1, "Computer Fundamental", 4),
	new Subject(2, "Introduction to Software Engineering", 3),
	new Subject(3, "Software Testing", 4),
];

const totalCredit = student.department.subjects.reduce((a, b) => {
	a += b.credit;
	return a;
}, 0);

/**
 * Teachers
 */

const dean = new Teacher(1, "Mr. Biplop", department.subjects[0], "EMP-001");
// TODO: update the dean's informaiton

const teacher1 = new Teacher(2, "Mr. Monsur", department.subjects[1]);
const teacher2 = new Teacher(3, "Mrs Laila", department.subjects[2]);

department.dean = dean;
department.addTeacher(dean);
department.addTeacher(teacher1);
department.addTeacher(teacher2);

console.log(student);
