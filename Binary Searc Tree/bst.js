class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Bst {
    constructor() {
        this.root = null;
    }

    addNode(data) {
        const node = new Node(data)
        if(!this.root) {
            this.root = node
        } else {
            this.insertNode(node, this.root)
        }
    }

    insertNode(newNode, node) {
        if(newNode.data < node.data) {
            if(!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(newNode, node.left)
            }
        } else {
            if(!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(newNode, node.right)
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data)
        console.log("This is root node", this.root)
    }

    removeNode(node, data) {
        console.log(node, data)
        if(!node) {
            return null;
        }
        if(node.data === data) {
            if(!node.left && !node.right) {
                node = null
                return node;
            }
            if(!node.left) {
                node = node.right;
                return node;
            }
            if(!node.right) {
                node = node.left;
                return node;
            }
        }
        if(node.data < data) {
            node = this.removeNode(node.left, data)
            return node;
        }
        if(node.data > data) {
            node = this.removeNode(node.right, data) 
            return node;
        }
    }
    
}

const bst = new Bst()
bst.addNode(27)
bst.addNode(10)
bst.remove(10)

// console.log(bst)