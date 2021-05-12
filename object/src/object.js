'use strict';

let person1 = {name: 'ming', age: 18};
let person2 = new Object();
person2.name = 'hong';
person2.age = 18;

console.log('name' in person1); // true
console.log('age' in person1); // true
console.log('title' in person1); // false

console.log(person1.hasOwnProperty('name')); // true
console.log(person1.hasOwnProperty('age')); // true
console.log(person1.hasOwnProperty('toString')); // false
