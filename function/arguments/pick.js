function pick(obj, ...keys) {
  console.log(arguments);
  let rtn = Object.create(null);
  for (const key of keys) {
    rtn[key] = obj[key];
  }
  return rtn;
}

xiaoming = {
  name: 'xiaoming',
  age: 10
};

console.log(xiaoming);
console.log(pick(xiaoming, 'name', 'age'));
