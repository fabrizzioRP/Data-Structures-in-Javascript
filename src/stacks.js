// Pilas (Stacks) (Last In First Out)

class StackArray {
    constructor(){
        this.stack = [];
    }

    push( element ){
        this.stack.push( element );
        return this.stack;
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[ this.stack.length - 1 ];
    }

    size(){
        return this.stack.length;
    }

    print(){
        return this.stack;
    }
}

const stackArray = new StackArray();

console.log( stackArray.push(' first element ') );
console.log( stackArray.push(' second element ') );
console.log( stackArray.push(' third element ') );
console.log( stackArray.size()  );
console.log( stackArray.peek()  );
console.log( stackArray.pop()   );
console.log( stackArray.print() );

// Objects

class StackObject {

    constructor(){
        this.stack = {};
        this.count = 0;
    }

    push( element ){
        this.stack[this.count] = element;
        this.count++;
        return element;
    }

    pop(){
        if( this.count ){
            this.count--;
            const element = this.stack[this.count];
            delete this.stack[this.count];
            return element;
        }
        return null;
    }

    size(){
        return (this.count) ? this.count : null;
    }

    isEmpty(){
        return (!this.count);
    }

    peek(){
        return ( this.isEmpty() ) ? null  : this.stack[ this.count - 1 ];
    }    

    print(){
        if( !this.isEmpty() ){
            let result = '';
            for (let i = this.count - 1; i >= 0 ; i--) {
                result += this.stack[i] + " , "; 
            }
            return result;
        } else {
            return null;
        }
        
    }

}

const stackObject = new StackObject();

console.log( stackObject.push(' first element ') );
console.log( stackObject.push(' seconds element ') );
console.log( stackObject.push(' third element ') );
console.log( stackObject.size() );
console.log( stackObject.pop() );
console.log( stackObject.peek() );
console.log( stackObject.isEmpty()  );
console.log( stackObject.print() );
