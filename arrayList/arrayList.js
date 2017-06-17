/*
 * Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure.
 * How do these operations compare to that of a linked list?
 * When would you want to use an array vs a linked list?
 */

class ArrayO {
  constructor() {
    this.object = {};
    this.i = 0;
  }
  push(item) {
    this.object[this.i] = item;
    this.i += 1;
  }
  pop() {
    const item = this.object[this.i];
    delete this.object[this.i];
    return item;
  }
  get(index) {
    let location = Object.keys(this.object)[index];
    return this.object[location];
  }
  delete(index) {
    const location = Object.keys(this.object)[index];
    const item = this.object[location];
    delete this.object[location];
    return item;
  }
}

module.exports = ArrayO;