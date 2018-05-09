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

    while (this.head){
      if (!this.head.next){
        return this.head;
      }
      this.head = this.head.next;
    }
  }
}

module.exports = { Node, LinkedList };
