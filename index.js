import LinkedList from "./linkedList.js";

const list = new LinkedList();

console.log(list.toString());

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

list.removeAt(-1);

console.log(list.toString());