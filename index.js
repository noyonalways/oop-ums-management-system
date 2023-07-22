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
	region: "Dhaka",
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

dean.blood = "AB+";
dean.department = department;
dean.salary = 100000;
dean.account = new Account(2, "Bank", 200000);
dean.contact = new Contact({
	id: 3,
	email: "biplop@gmail.com",
	phone: "+8801755555555",
	address: new Address({
		id: 2,
		roadNo: "Gulshan 02",
		city: "Gulshan City",
		region: "Dhaka",
		country: "Bangladesh",
		postalCode: "12234",
	}),
});

// teacher 1
const teacher1 = new Teacher(
	2,
	"Mr. Monsur",
	department.subjects[1],
	"EMP-002"
);
teacher1.blood = "AB-";
teacher1.department = department;
teacher1.salary = 80000;
teacher1.account = new Account(3, "Bank", 205000);
teacher1.contact = new Contact({
	id: 4,
	email: "monsur@gmail.com",
	phone: "+8801766666666",
	address: new Address({
		id: 2,
		roadNo: "Banani 02",
		city: "Banani City",
		region: "Dhaka",
		country: "Bangladesh",
		postalCode: "15634",
	}),
});

// teacher 2
const teacher2 = new Teacher(3, "Mrs Laila", department.subjects[2], "EMP-003");
teacher2.blood = "O+";
teacher2.department = department;
teacher2.salary = 75000;
teacher2.account = new Account(2, "Bank", 150000);
teacher2.contact = new Contact({
	id: 3,
	email: "laila@gmail.com",
	phone: "+8801788888525",
	address: new Address({
		id: 2,
		roadNo: "Mirpur 12",
		city: "Mirpur City",
		region: "Dhaka",
		country: "Bangladesh",
		postalCode: "12005",
	}),
});

department.dean = dean;
department.addTeacher(dean);
department.addTeacher(teacher1);
department.addTeacher(teacher2);

// student.department.teachers.forEach((teacher, index) => {
// 	console.log(`${teacher.id} - ${teacher.name} (${teacher.subject.name})`);
// });

guardian.addChild(student);

const teachersSalary = guardian.children[0].department.teachers.reduce(
	(acc, cur) => {
		acc += cur.salary;
		return acc;
	},
	0
);

console.log(teachersSalary);

let sameBloodCount = 0;
if (student.blood === "O+") sameBloodCount++;
if (student.guardian.blood === "O+") sameBloodCount++;
student.department.teachers.forEach((teacher) => {
	if (teacher.blood === "O+") sameBloodCount++;
});


console.log(sameBloodCount);