"use strict";

function Person(name) {
  if(typeof new.target != "undefined") {
    this.name = name;
  } else {
    console.log("should use new to create Person")
  }
}

let p = new Person('xiaoming');
console.log(p); // Person { name: 'xiaoming' }

Person('xiaoming'); //should use new to create Person

// function Teacher(name) {
//   console.log(new.target);
//   Person.call(this, name);
//   this.profession = 'teacher';
// }

// let t = new Teacher('hong');
// console.log(t);
