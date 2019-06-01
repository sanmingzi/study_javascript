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
