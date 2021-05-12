# 对象 (Object)

## 属性定义

```js
let person1 = {name: 'ming'};
let person2 = new Object();
person2.name = 'hong';
```

## 属性探测

- in

```js
console.log('name' in person1); // true
console.log('age' in person1); // true
console.log('title' in person1); // false
```

- hasOwnProperty

