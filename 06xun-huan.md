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
  } 
  return rtn;
}
```