function *createIterator(items) {
  for(let i = 0; i < items.length; i++) {
    yield items[i];
  }
}

items = [0, 1, 2];
iterator = createIterator(items);
rtn = iterator.next();
while(!rtn.done) {
  console.log(rtn);
  rtn = iterator.next();
}
