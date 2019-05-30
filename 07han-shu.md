# 函数

## 函数定义

- 无参函数

```
function alert_hello()
{
  alert("hello");
}
```

- 有参函数

```
function test_func(var1, var2)
{
// 可之行代码
}
```

- 函数返回值

```
function add(var1, var2)
{
  return var1 + var2
}
```

## 函数调用

```
<!DOCTYPE html>
<html>
<body>

<button id="demo" onclick="add(1, 2)">点我</button>

<script>
  function add(num1, num2)
  {
      alert(num1 + " + " + num2 + " = " + (num1 + num2));
      return num1 + num2;
  }
</script>

</body>
</html>
```