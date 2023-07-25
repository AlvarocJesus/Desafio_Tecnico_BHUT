function Queue() {
	this.elements = [];
}

Queue.prototype.enqueue = e => {
	this.elements.push(e);
};

Queue.prototype.dequeue = () => {
	return this.elements.shift();
};

Queue.prototype.isEmpty = () => {
	return this.elements.length === 0;
};

Queue.prototype.peek = () => {
	return !this.isEmpty() ? this.elements[0] : undefined;
};

Queue.prototype.length = () => {
	return this.elements.length;
};

const q = new Queue();

// eslint-disable-next-line no-plusplus
for (let i = 1; i <= 7; i++) {
	q.enqueue(i);
}

console.log(q);

console.log(`Number at the front of the queue: ${q.peek()}`);

console.log(`The length of the queue: ${q.length()}`);

while (!q.isEmpty()) {
	console.log(q.dequeue());
}

module.exports = Queue;
