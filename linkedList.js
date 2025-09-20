import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.headNode = null;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);
    function appendNode(passedList) {
      if (passedList.nextNode === null) {
        passedList.nextNode = newNode;
        return;
      } else {
        return appendNode(passedList.nextNode);
      }
    }
    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      appendNode(this.headNode);
    }
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    const list = this.headNode;
    newNode.nextNode = list;
    this.headNode = newNode;
  }

  // returns the total number of nodes in the list
  size() {
    const list = this.headNode;
    if (list === null) return 0;
    function countNodes(passedList) {
      if (passedList.nextNode !== null) {
        return 1 + countNodes(passedList.nextNode);
      } else return 1; // add 1 for the this.headNode which has been omitted
    }

    return countNodes(list);
  }

  // returns the first node in the list
  head() {
    return this.headNode;
  }

  // returns the last node in the list
  tail() {
    const list = this.headNode;
    if (list === null) return null;
    function getTail(passedList) {
      if (passedList.nextNode === null) {
        return passedList;
      } else {
        return getTail(passedList.nextNode);
      }
    }

    return getTail(list);
  }

  // returns the node at the given index
  at(index) {
    const list = this.headNode;
    if ((list === null && index === 0) || index < 0) return undefined;
    function getNode(passedList, count) {
      if (count > index) {
        return undefined;
      } else if (count === index) {
        return passedList;
      } else {
        return getNode(passedList.nextNode, ++count);
      }
    }

    return getNode(list, 0);
  }

  // removes the last element from the list and returns it
  pop() {
    const list = this.headNode;
    if (list === null) return undefined;
    if (list.nextNode === null) {
      this.headNode = null;
      return list;
    }
    function removeTail(passedList) {
      if (passedList.nextNode.nextNode === null) {
        let removedNode = passedList.nextNode;
        passedList.nextNode = null;
        return removedNode;
      } else {
        return removeTail(passedList.nextNode);
      }
    }
    return removeTail(list);
  }

  // returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    const list = this.headNode;
    if (list === null) return undefined;
    function findValue(passedList) {
      if (passedList.nodeValue === value) {
        return true;
      } else if (passedList.nextNode === null) {
        return false;
      }
      return findValue(passedList.nextNode);
    }
    return findValue(list);
  }

  // returns the index of the node containing value, or null if not found
  find(value) {
    const list = this.headNode;
    if (list === null) return null;
    function findValue(passedList, index) {
      if (passedList.nodeValue === value) {
        return index;
      } else if (passedList.nextNode === null) {
        return null;
      }
      return findValue(passedList.nextNode, ++index);
    }

    return findValue(list, 0);
  }
  // represents LinkedList objects as strings
  toString() {
    const list = this.headNode;
    if (list === null) return "null";
    function printValues(passedList) {
      if (passedList.nextNode !== null) {
        return (
          `( ${passedList.nodeValue} ) -> ` + printValues(passedList.nextNode)
        );
      } else {
        return `( ${passedList.nodeValue} ) -> ` + "null";
      }
    }

    return printValues(list);
  }

  // inserts a new node with the provided value at the given index
  insertAt(value, index) {
    const list = this.headNode;
    const newNode = new Node(value);
    if ((list === null && index !== 0) || index < 0) return undefined;
    if (list === null && index === 0) return (this.headNode = newNode);
    if (index === 0) {
      this.prepend(value);
      return;
    }
    function insert(passedList, count) {
      if (count === index) {
        const listRemainder = passedList.nextNode;
        passedList.nextNode = newNode;
        passedList.nextNode.nextNode = listRemainder;
        return newNode;
      } else if (count > index) {
        return undefined;
      }

      return insert(passedList.nextNode, ++count);
    }
    return insert(list, 1);
  }

  //removes the node at the given index
  removeAt(index) {
    const list = this.headNode;
    if (index < 0) return undefined;
    if (list === null) return undefined;
    if (index === 0) {
      const listRemainder = list.nextNode;
      this.headNode = null;
      this.headNode = listRemainder;
      return list;
    }

    function removeNode(passedList, count) {
      if (passedList.nextNode === null) {
        return undefined;
      } else if (count === index) {
        const listRemainder = passedList.nextNode.nextNode;
        passedList.nextNode = null;
        passedList.nextNode = listRemainder;
        return passedList;
      }

      return removeNode(passedList.nextNode, ++count);
    }

    return removeNode(list, 1);
  }
}
