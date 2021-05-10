# 迭代器和生成器

## 迭代器

迭代器是为了迭代过程而设计的对象，具有专门的接口。迭代器对象都有一个 next 方法，每次调用 next 方法返回一个结果对象，结果对象有两个属性 value / done 。

[iterator.js](iterator.js)

## 什么是生成器

迭代器的写法挺复杂的，生成器是一种返回迭代器的函数，能简化创建迭代器的过程。

[generator.js](generator.js)

使用 yield 能够大大简化创建迭代器的过程，但是使用 yield 有一些限制。

- 只能在生成器内部使用 yield
- 即便在生成器内部的函数中使用 yield 也是不可以的

## 可迭代对象 [Symbol.iterator]

可迭代对象具有 Symbol.iterator 方法，该方法返回一个迭代器。

for-of 循环每执行一次都会调用迭代器的 next 方法，并将结果对象的 value 存储在一个变量中，直到结果对象 done = true 。

[symbol_iterator.js](symbol_iterator.js)
