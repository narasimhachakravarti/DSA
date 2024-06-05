class Node {
  constructor(data) {
    this.previous = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    (this.head = null), (this.tail = null);
  }

  addNod(data) {
    const node = new Node(data);
    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  insertAfter(data, nextToNode) {
    let current = this.head;
    while (current) {
      if (current.data === nextToNode) {
        if (current === this.tail) {
          this.addNod(data);
        } else {
          const node = new Node(data);
          current.next.previous = node;
          node.next = current.next;
          node.previous = current;
          current.next = node;
        }
      }
      current = current.next;
    }
  }
  removeNode(data) {
    let current = this.head;
    while(current) {
        if(current.data === data) {
            if(current === this.head) {
                this.head = this.head.next;
                this.head.previous = null
            }
            else if(current === this.tail) {
                this.tail = current.previous;
                this.tail.next = null;
            }else {
                current.previous.next = current.next;
                current.next.previous = current.previous
            }
        } 
        current = current.next
    }
  }
  printNodesWithLinks() {
    let current = this.head;
    while (current) {
      console.log(`Node: ${current.data}`);
      console.log(
        `  Previous: ${current.previous ? current.previous.data : null}`
      );
      console.log(`  Next: ${current.next ? current.next.data : null}`);
      current = current.next;
    }
  }
}

const linkedList = new DoublyLinkedList();
linkedList.addNod(10);
linkedList.addNod(20);
// linkedList.addNod(30);
// linkedList.addNod(50);
linkedList.removeNode(10);
// linkedList.addNod(60);

// linkedList.insertAfter(40, 30);
linkedList.printNodesWithLinks();
