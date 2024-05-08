// Problem: 2– Javascript & Nodejs (Share this in Teams Chat)
// You are tasked with implementing a custom data structure in JavaScript called "OrderedQueue" that maintains a queue of elements sorted based on their priority. The OrderedQueue should support the following operations:
// enqueue(item, priority): Add an item to the queue with the specified priority. If an item with the same priority already exists, the new item should be inserted after all existing items with the same priority.
// dequeue(): Remove and return the item with the highest priority from the queue. If multiple items have the same highest priority, dequeue should return the one that was enqueued earliest.
// isEmpty(): Return true if the queue is empty, otherwise false.
// Your task is to implement the OrderedQueue data structure in JavaScript and demonstrate its usage with a series of test cases.

class OrderedQueue {
	constructor() {
		this.queue = [];
	}

	enqueue(item, priority) {
		let inserted = false;
		for (let i = 0; i < this.queue.length; i++) {
			if (this.queue[i].priority < priority) {
				this.queue.splice(i, 0, { item, priority });
				inserted = true;
				break;
			}
		}
		if (!inserted) {
			this.queue.push({ item, priority });
		}
	}
	dequeue() {
		if (!this.queue.length) return null;
		return this.queue.shift().item;
	}

	isEmpty() {
		return this.queue.length === 0;
	}
}

const orderedQueue = new OrderedQueue();
orderedQueue.enqueue('Task 1', 3);
orderedQueue.enqueue('Task 2', 1);
orderedQueue.enqueue('Task 3', 2);
console.log('QUEUE====>', orderedQueue);

console.log(orderedQueue.dequeue()); // Output: Task 2
console.log(orderedQueue.dequeue()); // Output: Task 3
console.log(orderedQueue.dequeue()); // Output: Task 1
console.log(orderedQueue.isEmpty());
