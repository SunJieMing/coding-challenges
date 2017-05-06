/*
 * Implement a linked list using an ES6 class.
 * 
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// const list = new LinkedList();
// list.tail;						// returns null
// list.addToTail('a');
// list.addToTail('b');
// list.head;						// returns 'a';
// list.contains('b');  // returns true;
// list.contains('c');  // returns false;
// list.removeHead();		// returns 'a'
// list.tail;						// returns 'b';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newTail = {
      value,
      next: null,
    }
    if (!this.head) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      let iterate = this.head;
      while (iterate.next) {
        iterate = iterate.next;
      }
      iterate.next = newTail;
      this.tail = newTail;
    }
  }

  removeHead() {
    let iterate = this.head;
    this.head = iterate.next;
    return iterate.value;
  }

  contains(value) {
    let iterate = this.head;
    while (iterate.next) {
      if (iterate.value === value) return true;
      iterate = iterate.next;
    }
    return false;
  }
}