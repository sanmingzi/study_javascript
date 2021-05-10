
typeof / instanceof
原始类型 / 引用类型 / 数组 / 函数

## 函数

函数和 call 属性

函数：声明和表达式

函数重载

this
改变this
call
apply
bind

函数是对象
new Function()

## 对象

属性
Put Set

属性探测
in / hasOwnProperty

删除属性
null / Delete

属性枚举
for-in vs Object.keys(obj)
很多原生属性不可枚举

属性类型
数据属性 访问器属性 (get / set)

属性特征
通用特征: Enumerable Configurable

数据属性特征
Value Writable

访问器属性
Get Set

Object.defineProperty
Object.defineProperties

获取属性特征
Object.getOwnPropertyDescriptor

### 禁止修改对象

扩展
Object.isExtensible
Object.preventExtensible

封印
Object.isSealed
Object.seal

冻结
Object.isFrozen
Object.freeze

## 构造函数

大写开头

```js
function Person() {};
let person1 = new Person;
let person2 = new Person;
console.log(person1 instanceof Person);
console.log(person1.constructor == Person);
```

## 原型对象

鉴定一个原型属性

```js
function hasPrototypeProperty(object, name) {
  return name in object && !object.hasOwnProperty(name);
}
```

Prototype

使用 new 调用构造函数来创建实例的时候，构造函数中的原型对象 (prototype) 会被赋给该实例的 [[Prototype]] 属性。

_proto_ vs prototype

```js
obj = {};
console.log(Object.prototype.isPrototypeOf(obj));
console.log(Object._proto_.isPrototypeOf(obj));
```

属性查找，首先在实例对象中进行查找；如果没找到，再到原型对象中进行查找。
实例对象中的属性会覆盖原型对象中的属性。

在实例对象中对属性进行操作，并不会影响原型对象。

原型对象中的属性可以共享给所有实例对象。
如果是方法属性，则所有实例对象都拥有这些方法。
如果是数据属性，则所有实例对象共享这些数据。这可能会导致一些奇怪的事情。

手动重置 prototype 的 constructor

内建对象的原型对象
Array.prototype String.prototype

## 继承

原型对象
原型对象链
每个对象都有原型对象。原型对象也是对象，那么 ta 也有属于自己的原型对象，这就构成了原型对象链。

所有对象都继承自 Object.prototype 。
那么 Object 是否也继承自 Object.prototype 呢

```js
console.log(Object.getPrototypeOf(Object) == Object.prototype);
```

## 对象继承

继承自原型对象 (默认行为)

继承自其他对象

Object.create(obj, {
});

白板对象
hash = Object.create(null);

[[Prototype]] vs prototype

## 构造函数继承

function YourConstructor() {

}

// js engine do behind
YourConstructor.prototype = Object.create(Object.prototype, {
  constructor: {
    value: YourConstructor,
    configurable: true,
    enumerable: true,
    writable: true
  }
});

## 构造函数窃取

call() apply()

## 访问父类方法

call() apply()

## 私有成员

闭包

```js
let person = (function() {
  let age = 10;

  return {
    name: 'xiaoming',

    getAge: function() {
      return age;
    }
  }
}());

person.getAge();
```

实例私有变量
实例共享私有变量

## 作用域安全的构造函数

## 混入

mixin
无法检查属性来源

## 基础

let vs var

const 常量

字符串模板

```js
`name: ${name}`
```

## 条件控制

if
switch-case
while
do-while
for
for-in
for-of
break / continue
try-catch-finally
strict

## 函数

function func_name();
new Function()
let func = function() {};
let func = () => {};

函数是对象

function vs new Function vs func = function()
function 在程式解析 / 编译的时候就会注册，简单来说就是可以在定义之前调用。
但是其他情况不可以

作用域
var / function 的作用域提升

## arguments

不检测长度

```js
// TODO
function printf(format) {

}
printf('hello {0}, this is {1}', 'xiaoming', 'xiaohong');
```

参数默认值
可变长度参数
... 展开参数
具名参数

高阶函数：将函数作为参数、传回值的函数

## 迭代器和生成器的作用

## 箭头函数和普通函数的区别

## set map 等集合

## 继承的方法

## promise 异步编程

## 模块
