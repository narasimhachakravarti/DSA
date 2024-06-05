class Stack {
    constructor() {
        this.stack = []
    }

    push(value) {
        this.stack.push(value)
    }

    pop() {
        this.stack.pop()
    }

    print() {
        for(let i = 0; i <this.stack.length; i++) {
            console.log(this.stack[i])
        }
    }

    peek() {
        if(this.stack.length > 0) {
            console.log(this.stack[0])
        } else {
            console.log("Stack is empty")
        }
    }
}

const stack = new Stack()

stack.push('V')
stack.push('I')
stack.push('S')
stack.print()
stack.peek()
console.log(stack)