#linked-list

A JavaScript implementation of a singly linked list data structure using recursive methods.

## Features

- Append and prepend nodes
- Insert and remove nodes at specific indices
- Search for values
- Get nodes by index
- Get list size
- Convert list to string representation

## Usage

```javascript
import LinkedList from "./linkedList.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");

console.log(list.toString()); // ( dog ) -> ( cat ) -> null
console.log(list.size()); // 2
console.log(list.contains("dog")); // true
```

### Methods

- `append(value)` - Add value to end of list
- `prepend(value)` - Add value to start of list
- `size()` - Get total nodes count
- `head()` - Get first node
- `tail()` - Get last node
- `at(index)` - Get node at index
- `pop()` - Remove and return last node
- `contains(value)` - Check if value exists
- `find(value)` - Get index of value
- `toString()` - Convert list to string
- `insertAt(value, index)` - Insert at index
- `removeAt(index)` - Remove node at index