/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */

class Stack {
  constructor() {
    this.arr = []
  }
    get size() {
      return this.arr.length;
    }
    add(insert) {
      this.arr.push(insert);
    }
    remove() {
      if (this.size === 0) return 0;
      return this.arr.pop();
  }
}

class Queue {
  constructor() {
    this.stacks = new Stack();
    this.invert = new Stack();
  }
  get size() {
    return this.stacks.size;
  }
  enqueue(insert) {
    const forw = this.stacks.size;
    for (let i = 0; i < forw; i++) {
      this.invert.add(this.stacks.remove());   
    }
    this.invert.add(insert);
    const back = this.invert.size
    for (let j = 0; j < back; j++) {
      this.stacks.add(this.invert.remove());
    }
  }
  dequeue() {
    if (this.stacks.size === 0) return 0;
    return this.stacks.remove();
  }
}

const queue = new Queue();