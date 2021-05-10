function person(name) {
  console.log(name);
}

let p = null;

p = person('xiaoming');
console.log(p);

p = person.call(this, 'xiaoming');
console.log(p);

p = new person('xiaoming');
console.log(p);
