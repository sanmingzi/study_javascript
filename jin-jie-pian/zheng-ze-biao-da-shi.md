# Javascript正则表达式

[Javascript正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

## 正则表达式的方法

方法 | 描述
---- | ----
exec | 在字符串中执行查找匹配的RegExp方法，返回一个数组（未匹配返回null）
test | 在字符串中测试是否匹配的RegExp方法，返回true/false
match | 在字符串中执行查找匹配的String方法，类似exec
search | 在字符串中测试是否匹配的String方法，返回匹配到的位置索引，失败返回-1，类似test
replace | 在字符串中执行查找匹配的String方法，并且替换掉匹配的子字符串
split | 使用正则表达式或者固定字符分隔一个字符串，并且将结果存到数组中的String方法

- demo

```javascript
// 方法1
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");

// 方法2
var myArray = /d(b+)d/g.exec("cdbbdbsbz");

// 方法3
var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");

console.log(myArray);
console.log(myArray[0]); // dbbd
console.log(myArray[1]); // bb
console.log(myArray.index); // 1
console.log(myRe.lastIndex); // 5
```

## 使用括号的子字符串匹配

当正则表达式中使用括号时，将导致相应的子匹配被记住。可以使用数组元素[1]..[n]来回调括号中匹配的子串。

- demo

```javascript
var re = /(\w+)\s(\w+)\s(\w+)/;
var str = "Mike John Smith";
var newstr = str.replace(re, "$3 $2 $1");
console.log(newstr); // Smith John Mike
```

## 正则表达式标志

标志 | 描述
---- | ----
g | 全局搜索
i | 不区分大小写
m | 多行搜索
y | TODO

```
var re = /pattern/flags;
var re = new RegExp("pattern", "flags");
```

## 例子

- 改变字符串的顺序

```javascript
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";
var nameList = names.split(/\s*;\s*/);
for(i = 0; i < nameList.length; i++) {
    console.log(nameList[i].replace(/(\w+)\s(\w+)/, "$2 $1"));
    Trump Harry
VM1654:4 Barney Fred
VM1654:4 Rigby Helen
VM1654:4 Abel Bill
VM1654:4 Hand Chris 
}
```