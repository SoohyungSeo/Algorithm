class Stack{
    constructor(){
        this.arr = []
        this.index = 0;
    }    
    push(item){
        this.arr[this.index++] = item;
    }
    pop(){
        if(this.index <= 0) return null;
        const result = this.arr[--this.index];
        return result
    }
}

let stack = new Stack
stack.push(1)
stack.push(3)
stack.push(5)
stack.push(7)
stack.push(9)
console.log(stack)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())