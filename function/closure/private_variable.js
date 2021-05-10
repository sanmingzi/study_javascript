function Count(initVal) {
  let count = initVal || 0;

  this.getCount = () => { return count; }
  this.add = () => { count++; }
}

let count = new Count();
for(let i = 0; i < 3; i++) {
  count.add();
  console.log(count.getCount());
}

count = new Count(100);
for(let i = 0; i < 3; i++) {
  count.add();
  console.log(count.getCount());
}
