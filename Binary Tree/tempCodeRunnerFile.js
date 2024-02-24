class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		var newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		var current = this.root;
		while (true) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}
	find(value) {
		if (this.root === null) return false;
		var current = this.root,
			found = false;
		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}
	contains(value) {
		if (this.root === null) return false;
		var current = this.root,
			found = false;
		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				return true;
			}
		}
		return false;
	}
	preorder(root) {
		if (root) {
		  console.log(root.value);
		  this.preorder(root.left);
		  this.preorder(root.right);
		}
	  }
	
	  inorder(root) {
		if (root) {
		  this.inorder(root.left);
		  console.log(root.value);
		  this.inorder(root.right);
		}
	  }
	
	  postorder(root) {
		if (root) {
		  this.postorder(root.left);
		  this.postorder(root.right);
		  console.log(root.value);
		}
	  }
		// bfs
		levelOrder(root) {
		  if (this.root === null) {
			return;
		  }
		  let queue = [];
		  queue.push(this.root);
		  while (queue.length > 0) {
			let current = queue.shift();
			console.log(current.value);
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		  }
		}
}

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log("Preorder traversal:");
tree.preorder(tree.root);
console.log("Inorder traversal:");
tree.inorder(tree.root);
console.log("Postorder traversal:");
tree.postorder(tree.root);
console.log("level order traversal:");
tree.levelOrder(tree.root);
