'use strict';

console.log(Object.prototype);

function Person() {}
Person.prototype.name = () => { return this.name; }

console.log(Person.prototype);

let ming = new Person();
let obj = ming;
console.log(obj.constructor);
// while(obj != null) {
//   console.log(obj, '-', obj.constructor, '-', obj.constructor.prototype);
//   obj = obj.constructor.prototype;
// }
for(let i = 0; i < 10; i++) {
  console.log(obj, '-', obj.constructor, '-', obj.constructor.prototype);
  obj = obj.constructor.prototype;
}

for(let i = 0; i < 10; i++) {
  if(obj == null) break;
  let proto = Object.getPrototypeOf(obj);
  console.log(obj, '-', proto);
  obj = proto;
}
