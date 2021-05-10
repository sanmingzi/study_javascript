function createIterator(items) {
  let i = 0;
  return {
    next: () => {
      let done = (i >= items.length);
      let value = (done ? null : items[i++]);
      return {
        value: value,
        done: done
      };
    }
  };
}

items = [0, 1, 2, 3, 4];
iterator = createIterator(items);
rtn = iterator.next();
while(!rtn.done) {
  console.log(rtn);
  rtn = iterator.next();
}
