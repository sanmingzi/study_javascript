# 循环

## for循环

```
function sum(begin, end) {
  var rtn = 0;
  for(var i = begin; i <= end; i++) {
    rtn += i;
  }
  return rtn;
}
console.log(sum(1, 10));
```

## for/in循环

```
var nums = [0, 1, 2, 3];
for(x in nums) {
  console.log(x);
}

var person = {name1: 'a', name2: 'b'};
for(x in person) {
  console.log(x + ": " + person[x]);
}
```

## for循环和for/in循环的区别

```
var nums = [];
nums[0] = 0;
nums[2] = 2;
nums[5] = 5;
for(var i = 0; i < nums.length; i++) {
  console.log(i + ": " + nums[i]);
}

for(x in nums) {
  console.log(x);
}
```

## while循环

```
function sum(begin, end) {
  var rtn = 0;
  while(begin <= end) {
    rtn += begin;
    begin++;
  }
  return rtn;
}
```

## do/while循环

```
function sum(begin, end) {
  var rtn = 0;
  if(begin > end) return 0;
  do {
    rtn += begin;
    begin++;
  } while(begin <= end)
  return rtn;
}
console.log(sum(1, 10));
console.log(sum(10, 10));
console.log(sum(10, 9));
```
