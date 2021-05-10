# 函数 (Function)

## 一等公民

- 可以通过字面量进行创建
- 可以赋值给其他变量
- 可以作为参数传递给函数
- 可以作为函数的返回值返回
- 拥有动态创建并赋值的属性

函数还有其他对象没有的特殊功能，那就是可以被调用。

## 函数调用

- 作为函数进行调用
- 作为方法进行调用
- 作为构造器进行调用
- 通过 apply() / call() 方法进行调用

## Function 构造函数

[function_constructor.js](function_constructor.js)

## call vs construct

js 函数有两个内部方法：[[Call]] / [[Construct]] 。当通过 new 关键字调用函数执行的是 [[Construct]] 方法；如果不通过 new 调用函数，则执行 [[Call]] 方法。

具有 [[Construct]] 方法的函数被称为构造函数。不是所有函数都有 [[Construct]] 方法，因此不是所有函数都能通过 new 来调用。箭头函数就没有 [[Construct]] 。

[call_construct.js](call_construct.js)

## new.target

当调用函数的 [[Construct]] 方法时，new.target 指向实例对象；如果调用函数的 [[Call]] 方法，new.target = undifined 。

[new_target.js](new_target.js)

## 箭头函数

## 尾调用优化

- 尾调用不访问当前栈帧的变量
- 尾调用是函数内部的最后一条语句
- 尾调用的结果作为函数的返回值，需要显示使用 return

满足上述三个条件就能触发 js 引擎的尾调用优化。递归函数是尾调用优化的主要应用场景。

[factorial.js](factorial.js)
