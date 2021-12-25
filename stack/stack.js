class Stack {
  constructor() {
    this.stack = [];
  }

  length() {
    return this.stack.length;
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}

const mystack = new Stack();

console.log(mystack.length());
mystack.push(5);
mystack.push(8);
console.log(mystack.pop());
mystack.isEmpty();
mystack.length();
console.log(mystack.peek());
mystack.pop();
mystack.isEmpty();
