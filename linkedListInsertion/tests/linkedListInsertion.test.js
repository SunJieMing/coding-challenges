const linkedListInsertion = require('../linkedListInsertion');

let list;

describe('linkedListInsertion', () => {
  beforeEach(() => {
    list = new LinkedList();
  });

  it('should have the methods "addToTail", "removeHead", and "contains"', () => {
    const hasAddToTail = Object.getPrototypeOf(list).hasOwnProperty('addToTail');
    const hasRemoveHead = Object.getPrototypeOf(list).hasOwnProperty('removeHead');
    const hasContains = Object.getPrototypeOf(list).hasOwnProperty('contains');
    const hasInsert = Object.getPrototypeOf(list).hasOwnProperty('insert');
    expect(hasAddToTail).toBe(true);
    expect(hasRemoveHead).toBe(true);
    expect(hasContains).toBe(true);
    expect(hasInsert).toBe(true);
  });

  it('should update the tail value when a new node is added', () => {
    list.addToTail(1);
    expect(list.tail.value).toBe(1);
    list.addToTail(2);
    expect(list.tail.value).toBe(2);
  });
  
});