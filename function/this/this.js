'use strict';

function creep() { return this; }
console.log(creep());

console.log(creep() == null);
console.log(creep() == undefined);

let ninjia = {creep: creep};
console.log(ninjia.creep() == ninjia);
