class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList { 
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(data) {
        const node = new Node(data)
        if(!this.head) {
           this.tail = node;
           this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }


    insertAfter(data, nextToData) {
        let current = this.head;
        const node = new Node(data)
        while(current) {
            if(current.data === nextToData) {
                if(current === this.tail) {
                    this.tail.next = node;
                    this.tail = node
                } else {
                    node.next = current.next;
                    current.next = node
                }
                break;
            }
            current = current.next;
        }
      
    }


    removeNode(data) {
        let current = this.head;
        let previous = this.head;
        while(current) {
            if(current.data === data) {
                if(current === this.tail) {
                    if(this.head === null) {
                        this.tail = null
                    } else {
                        this.tail = previous
                    }
                } 
                if(current === this.head) {
                    this.head = current.next;
                }
                previous.next = current.next;
            } else {
                previous = current;
            }
            current = current.next;
        }
    }

    print() {
        console.log(this.head)
        console.log(this.tail)
    }
}

const linkedList = new LinkedList()

linkedList.addNode(23)
linkedList.addNode(25)
linkedList.addNode(28)
linkedList.removeNode(25)
linkedList.print()

// console.log(linkedList)

