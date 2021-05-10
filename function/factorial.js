function factorial(n, rtn = 1) {
  if(n == 1) {
    return rtn;
  } else {
    rtn *= n;
    return factorial(n - 1, rtn)
  }
}

console.log(factorial(5));
console.log(factorial(6));
