let funcs = [];
for(let i = 0; i < 10; i++) {
  funcs.push(function(){
    console.log(i);
  });
}
funcs.forEach(func => {
  func(); // 0..9
});

funcs = [];
for(var i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i);
  });
}
funcs.forEach(func => {
  func(); // 10..10
});

funcs = [];
for(var i = 0; i < 10; i++) {
  funcs.push(function(value) {
    return function() { console.log(value); };
  }(i));
}
funcs.forEach(func => {
  func(); // 0..9
});
