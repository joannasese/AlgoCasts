// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    // where this.head refers to next!
    // we don't want to overwrite
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
      // node = node.next so that we evaluate only if node !== null;
    }
    return counter;
  }

  getFirst() {
    while (this.head){
      return this.head;
      //this.head will always be pointing to first node;
    }
  }

  getLast() {
    if (!this.head){
      return null;
    }
    let node = this.head
    while (node){
      if (!node.next){
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head){
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {

    if (!this.head) {
      return;
    }

    if (!this.head.next){
      this.clear();
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(num) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === num) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(num) {
    if (!this.head) {
      return;
    }

    if (num === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(num-1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
    // this is confusing
  }

  insertAt(data, index){
    let counter = 0;
    let node = this.head;
    if (node) {
      if (counter === index) {
        node = this.getAt(index)
        return;
      } else {
        return this.insertLast(data);
      }
      counter++;
      node = node.next
    }
    return this.insertFirst(data);
  }

  insertAt(data, index) {
    if (!this.head) {
      return this.insertFirst(data);
    }
    if (index === 0) {
      return this.insertFirst(data);
    }
    const previous = this.getAt(index-1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

}

module.exports = { Node, LinkedList };
