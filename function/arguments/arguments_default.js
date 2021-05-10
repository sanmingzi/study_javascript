"use strict";

function mixArgs(first, second = 1) {
  console.log(arguments.length);
  console.log(arguments);
  console.log(first == arguments[0]);
  console.log(second == arguments[1]);
  first = 2;
  second = 3;
  console.log(first == arguments[0]);
  console.log(second == arguments[1]);
}

mixArgs(0);
mixArgs(0, 1);
