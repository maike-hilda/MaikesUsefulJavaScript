# userfulJavaScript
A repository with some useful 101 about JavaScript

## Data Structures

### Linked List

Singly-Linked List: stores reference to next node only, as well as a value
Doubly-Linked List: stores references to next and previous node, as well as a value

**Performance**
Add/Removing Head or Tail *O(1)*
Searching *O(n)*

#### Constructor functions for a doubly-linked list
add nodes - remove nodes - search a value

```javascript
function LinkedList() {
  this.head = null; //since there aren't any nodes yet
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// add methods to LinkedList prototype
LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  // check if there are nodes existent already
  if (this.head) {
    // set the current head's previous node to new node 
    this.head.prev = newNode;
  } else {
    // if no node yet, set newNode as tail (will be head and tail)
    this.tail = newNode;
  }
  // add new node to the head 
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  // check if there are nodes existent already
  if (this.tail) {
    // set the current tail's next node to new node 
    this.tail.next = newNode;
  } else {
    // if no node yet, set newNode as head (will be head and tail)
    this.head = newNode;
  }
  // add new node to the head 
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  // if empty list
  if (!this.head) {
    return null;
  }   
  // value of head node
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) { 
    // there is still at least one node 
    this.head.prev = null;
  } else { 
    // list is now empty
    this.tail = null;
  }
  return val;
};

LinkedList.prototype.removeTail = function() {
  // if empty list
  if (!this.tail) {
    return null;
  }   
  // value of head node
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) { 
    // there is still at least one node 
    this.tail.next = null;
  } else { 
    // list is now empty
    this.head = null;
  }
  return val;
};

LinkedList.prototype.search = function(searchValue) {
  // choose to start at head or tail 
  var currentNode = this.head; 
  while (currentNode) {
    if (currentNode.value === searchValue) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
  }
  return null;
};

// return array with indeces of a value
LinkedList.prototype.indexOf = function(searchValue) {
  var indices = [];
  var currentNode = this.head;
  var currentIndex = 0;
  while (currentNode) {
    if (currentNode.value === searchValue) {
      indices.push(currentIndex);
    }
    currentIndex++;
    currentNode = currentNode.next;
  }
  return indices;
};

var ll = new LinkedList();
ll.addToTail(10);
ll.addToTail(20);
ll.addToTail(30);
ll.addToHead(100);
ll.addtoHead(20);

// 20 100 10 20 30

ll.indexOf(20); // [0 3]

console.log(ll); // 20 and 30
console.log(ll.tail.prev); // 20
console.log(ll.tail.prev.prev); // 10
console.log(ll.head.next); // 100

ll.removeHead()); 
// 100 10 20 30

ll.removeTail()); 
// 100 10 20 

ll.search(10);
```