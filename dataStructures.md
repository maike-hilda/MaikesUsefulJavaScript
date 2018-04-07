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

### Binary Search Tree

Fast to search, fast to insert and delete data
Balanced trees have mostly left and right nodes (for optimal performance)

Use: dictionary, phone book, users if stored by id

**Performance**
Searching *O(log n)*

#### Constructor functions for a Binary Search Tree
insert - contains - depth first - breadth first

```javascript
function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(value) {
    if (value <= this.value) {
        // if less than or equal to current node
        if (!this.left) {
            // if no left node
            this.left = new BST(value);
        } else {
            // recursion: if there is a node, run the insert method on that node
            this.left.insert(value);
        }
    } else if (value > this.value) {
        // if greater than current node
        if (!this.right) {
            // if no right node
            this.right = new BST(value);
        } else {
            // recursion
            this.right.insert(value);
        }
    }
}

BST.prototype.contains = function(value) {
    if (value == this.value) {
        return true;
    } else if (value < this.value) {
        if (!this.left) {
            return false;
        } else {
            return this.left.contains(value);
        }
    } else if (value > this.value) {
        if (!this.right) {
            return false;
        } else {
            return this.right.contains(value);
        }
    }
};

// in-order will hit nodes from least to greatest
// pre-order will touch parent node, left, right (useful for tree copies)
// post-order all left children, then all right children, then parent node (useful for deletion)
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
    if (order === "pre-order") {
      iteratorFunc(this.value);
    }
    if (this.left) {
      this.left.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === "in-order") {
      iteratorFunc(this.value);
    }
    if (this.right) {
      this.right.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === "post-order") {
      iteratorFunc(this.value);
    }
};

// traverse through hole tree, level by level
// to define hierachy or level of command
BST.prototype.breathFirstTraversal = function(iteratorFunc) {
  // this refers to root node of BST (entire object)
  var queue = [this]; 
  // run while queue is not empty
  while (queue.length) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) {
      queue.push(treeNode.left);
    }
    if (treeNode.right) {
      queue.push(treeNode.right);
    }
  }
};

// the min value is the leftmost node
BST.prototype.getMinVal = function() {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};

// the max value is the rightmost node
BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};

var bst = new BST(50); // bst = { value: 50, left: null, right: null }

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

// run a few of those to test insert method
console.log(bst.right.right); // 100

// run a few of those to test contains method
console.log(bst.contains(34));

function log(value) {
  console.log(value);
}

function log2(node) {
  console.log(node.value);
}

bst.depthFirstTraversal(log, "in-order"); 
// 10 20 30 35 45 50 59 60 70 85 100 105
bst.depthFirstTraversal(log, "pre-order");
// 50 30 20 10 45 35 70 60 59 100 85 105
bst.depthFirstTraversal(log, "post-order");
// 10 20 35 45 30 59 60 85 105 100 70 50

bst.breathFirstTraversal(log2);

console.log("min: ", bst.getMinVal()); // 10
console.log("max: ", bst.getMaxVal()); // 105
```

### Hash Table
Key / Value pairs
Uses: Store username and email
Cons: don't store references to other pieces of data (like children and parent nodes)

**Performance**
Lookup / Insertion *O(1)*

#### Constructor functions for a Binary Search Tree
Insert - Get - Hash

```javascript
function HashTable(size) {
  // size = # of buckets
  this.buckets = Array(size);
  // keep track of how many buckets
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

// takes in string that is key and turns into number
// that number determines the bucket 
HashTable.prototype.hash = function(key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
};

HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  } else if (this.buckets[index].key === key) {
      // updates value if the key exists as a first item in bucket  
      this.buckets[index].value = value;
  } else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      // in case the key already exists it updates it
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;    
    }
    // if we don't find anything 
    return null;
  }
};

// print all table contents
HashTable.prototype.retrieveAll = function() {
  var allNodes = [];
  for (var i = 0; i < this.numBuckets; i++) {
    var currentNode = this.buckets[i];
    while (currentNode) {
      allNodes.push(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  return allNodes;
};

var myHT = new HashTable(30);

myHT.insert("Maike", "info@maike.com");
myHT.insert("John", "info@john.com");
// will go in the same bucket as Maike 
myHT.insert("Miake", "info@miake.com");
myHT.insert("Maike", "maike@email.com")

console.log(myHT.buckets);

console.log(myHT.get("John"));
console.log(myHT.get("Miake"));

console.log(myHT.retrieveAll());
```
