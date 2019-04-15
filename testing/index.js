function Person(first, last, age, gender, interests) {
	this.name = {
		first,
		last
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
};

Person.prototype.greeting = function () {
	alert('Hi! I\'m ' + this.name.first + '.');
};


function Teacher(first, last, age, gender, interests, subject) {
	Person.call(this, first, last, age, gender, interests);

	this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher;

const person1 = new Person('asdsad', 'asdasd', 34, 'asdsad', ['asd', 'asd'], 'asdasd', '1111');
const teacher1 = new Teacher('asdsad', 'asdasd', 34, 'asdsad', ['1', '2'], 'asdasd');



console.log(Object.getOwnPropertyNames(Person.prototype))
console.log(Object.getOwnPropertyNames(Teacher.prototype))
console.log(person1)
console.log(teacher1)
console.log(Person.prototype.greeting)
console.log(Teacher.prototype.greeting)
console.log(Teacher.prototype.constructor)