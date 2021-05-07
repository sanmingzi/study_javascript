# 块级作用域绑定 (block scope binding)

## 变量提升 (hoisting)

在函数作用域或全局作用域中通过 var 关键字声明的变量，无论实际上是在哪里声明的，都会被当成在当前作用域顶部声明的变量。这就是 js 中的提升机制。同样受提升机制影响的还有函数声明。

[var.js](var.js)

## 块级声明

块级声明用于声明在指定块的作用域之外无法访问的变量。块级作用域存在于：

- 函数内部
- {} 花括号之间

可以用 let / const 来声明块级变量。由于块级声明不会提升，所以通常将 let / const 声明放在封闭代码块的顶部。

[let_const.js](let_const.js)

## 禁止重声明

如果作用域中已经存在某个标识符，使用 let / const 声明它就会报错。

[repeat_declare.js](repeat_declare.js)

## 临时死区 (Temporal Dead Zone)

JS 引擎在扫描代码发现变量声明时，要么将它们提升至作用域顶部（var），要么将声明放到 TDZ 中 （let / const）。访问 TDZ 中的变量会触发运行时错误。只有执行过变量声明后，变量从 TDZ 中移出，才能正常访问。

即使使用 typeof 访问 TDZ 中的变量也会出错。但在 let 作用域外对该变量使用 typeof 则不会报错。这点需要特别注意。

[tdz.js](tdz.js)

## 循环中的函数

在循环中 var / let 也有着很大的区别。使用 let 声明时，每次迭代循环都会创建一个新变量，并以之前迭代中同名变量的值将其初始化。这样循环中的函数都能拥有一个变量副本。而使用 var 声明时，迭代中不同的函数共享变量 i 。

[loop_scope.js](loop_scope.js)

## 全局块作用域绑定

当 var 被用于全局作用域时，它会创建一个新的全局变量作为全局对象（浏览器环境中的 window 对象）的属性。使用 var 很可能无意中覆盖一个已经存在的全局变量。

[global_scope.js](global_scope.js)
