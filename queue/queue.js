class Queue {
  constructor() {
    this.queue = [];
    this.peak = 0;
  }

  enqueue(value) {
    this.queue.unshift(value);
    this.peak += 1;
  }

  dequeue() {
    if (this.peak > 0) {
      this.peak = this.peak - 1;
      console.log(this.queue);
    }
  }
  peek() {
    if (this.isEmpty()) {
      return this.queue[this.peak];
    }
    return false;
  }
  isEmpty() {
    return this.peek === 0;
  }
  getLength() {
    return this.peak;
  }
}

const newQueue = new Queue();

newQueue.enqueue(5);
newQueue.enqueue(88);
console.log(newQueue.getLength());
console.log(newQueue.dequeue());
console.log(newQueue.getLength());
