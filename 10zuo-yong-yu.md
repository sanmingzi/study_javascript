# 作用域

## 变量作用域

```
// 函数内部声明的变量只能在函数内部使用
// 函数外部不能使用变量rtn
function add(num1, num2)
{
  var rtn = num1 + num2;
  return rtn; 
}
```

```
var str = "hello";
function test_func()
{
  console.log(str); // str是全局变量，可以在函数内部使用
}
```

```
```