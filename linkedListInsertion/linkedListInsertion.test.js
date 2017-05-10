const LinkedList = require('./linkedListInsertion');
/* eslint-disable no-undef */

let list;

beforeEach(() => {
  list = new LinkedList();
});

describe('LinkedList', () => {
  it('should return the head value from removeFromHead', () => {
    list.insert(1);
    list.insert(2);
    expect(list.removeFromHead()).toBe(1);
    expect(list.removeFromHead()).toBe(2);
  });

  it('should return null if removeFromHead is called on an empty list', () => {
    expect(list.removeFromHead()).toBe(null);
  });

  it('should keep list items sorted as items are randomly inserted', () => {
    list.insert(3);
    list.insert(1);
    list.insert(4);
    list.insert(2);
    expect(list.removeFromHead()).toBe(1);
    expect(list.removeFromHead()).toBe(2);
    expect(list.removeFromHead()).toBe(3);
    expect(list.removeFromHead()).toBe(4);
    expect(list.removeFromHead()).toBe(null);
  });

  it('should properly insert items if they are inserted in descending order', () => {
    list.insert(4);
    list.insert(3);
    list.insert(2);
    list.insert(1);
    expect(list.removeFromHead()).toBe(1);
    expect(list.removeFromHead()).toBe(2);
    expect(list.removeFromHead()).toBe(3);
    expect(list.removeFromHead()).toBe(4);
    expect(list.removeFromHead()).toBe(null);
  });

  it('should maintain the sorted list when the head is removed', () => {
    list.insert(2);
    list.insert(1);
    expect(list.removeFromHead()).toBe(1);
    list.insert(5);
    expect(list.removeFromHead()).toBe(2);
    list.insert(4);
    expect(list.removeFromHead()).toBe(4);
    expect(list.removeFromHead()).toBe(5);
    expect(list.removeFromHead()).toBe(null);
  });
});
