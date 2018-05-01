/*
 * Create a linked list that maintains a sorted order to it's elements.
 * When you insert a new element insert it at it's appropriate position.
 * Example: [1] -> [2] -> [3]
 * list.insert(3);
 * [1] -> [2] -> [2] -> [3]
 * Bonus: Write automated tests
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  };

  addToTail(value) {
    const newTail = {
      prev: this.tail,
      value,
      next: null
    };
    if (!this.head) {
      this.head = newTail;
      this.tail = newTail;
    }
    this.tail.next = newTail;
    this.tail = newTail;
  };

  contains(search) {
    let iterate = this.head;
    while (iterate.next) {
      if (iterate.value === search) return true;
      iterate = iterate.next;
    }
    return false;
  };

  insert(value) {
    const newInsert = {
      prev: null,
      value,
      next: null
    };
    if (!this.head) {
      this.head = newInsert;
      this.tail = newInsert;
    }
    let iterate = this.head;
    while(iterate.next) {
      if (iterate.value === value) {
        newInsert.next = iterate.next;
        iterate.next = newInsert;
        break;
      }
      if (iterate.next > value) {
        newInsert.next = iterate.next;
        iterate.next = newInsert;
        break;
      }
      iterate = iterate.next;
    }
  };

  removeHead() {
    let iterate = this.head;
    this.head = iterate.next;
    return iterate.value;
  };
};
