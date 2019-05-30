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
<!DOCTYPE html>
<html>
<body>

<script>
  function my_alert()
  {
    str = "hello";
    alert(str);
  }
  my_alert(); // 调用函数后，函数内部没有声明的变量自动成为了全局变量
  alert(str); // str成为了全局变量，可以使用
</script>

</body>
</html>
```