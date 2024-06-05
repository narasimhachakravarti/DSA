class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(val) {
    this.queue.push(val);
  }
  dequeue(val) {
    this.queue.shift();
  }

  print() {
    console.log(this.queue);
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(34);
queue.enqueue(3);
queue.enqueue(1);
queue.print();
queue.dequeue();
queue.print();
