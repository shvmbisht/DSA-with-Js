class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}
	pop() {
		if (!this.head) return 'Nothing to pop';
	}
}

let list = new SinglyLinkedList();
// list.push('first');
// list.push('second');
// list.push('third');
console.log(list.pop());

console.log(JSON.stringify(list));
