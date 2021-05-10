let collection = {
  items: [],

  push: function(item) {
    this.items.push(item);
  },

  // *[Symbol.iterator]() {
  // }

  [Symbol.iterator]: function *() {
    for(const item of this.items) {
      yield item;
    }
  }
}

collection.push(0);
collection.push(1);
for(const x of collection) {
  console.log(x);
}
