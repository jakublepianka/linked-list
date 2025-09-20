export default class Node {
  constructor(data = null, nextNode = null) {
    this.nodeValue = data;
    this.nextNode = nextNode;
  }
}
