// 在函数定义之前调用函数，说明函数的作用域提升了
getValue(false);

function getValue(condition) {
  // value 的作用域提升了
  console.log(value);
  if(condition) {
    var value = "blue";
    return value;
  } else {
    return null;
  }
}

getValue(false);
