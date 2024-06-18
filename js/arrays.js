

//array - a set of particular group

var cars = ["Saab", "volvo", "BMW"]

var person_1 = { firstName: " John", lastName: "Doe", age:46};
var person_2 = { firstName: " John", lastName: "Santos", age:46};
var person_3 = { firstName: " Regina", lastName: "xxx", age:22};
var person_4 = { firstName: " Roman", lastName: "xxx", age:55};


var bus = [person_1, person_2, person_3, person_4];

console.log('before:' , bus);


var person_5 = { firstName: "Vlad", lastName: "Doe", age: 46};
bus.push(person_5);

var person_in_the_front = bus.pop(); // jump at bus stop 1
person_in_the_front = bus.pop (); // jump at bus stop 2


bus.reverse();

console.log('who', bus.pop().firstName); // jump at bus stop3



console.log('after:' , bus);

console.log(person_in_the_front.firstName);

console.log(bus);

var regina = bus[2];

console.log(bus[2].firstName); // third element in the array - use 2 because they start with the position zero


var full_name = "valesca frey";

console.log(full_name[3]);

console.log(full_name.replace("frey", "pereira"));

