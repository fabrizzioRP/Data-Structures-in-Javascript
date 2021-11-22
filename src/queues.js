// Colas (Queues) (First In First Out)

class QueuesArray {

    constructor(){
        this.queues = [];
    }

    enqueue( element ) {
        this.queues.push( element );
        return this.queues;
    }

    dequeue() {
        return this.queues.shift();
    }

    peek() {
        return this.queues[0];
    }

    size() {
        return this.queues.length;
    }

    isEmpty(){
        return this.queues.length === 0;
    }

    print(){
        return this.queues;
    }

}

const colaArray = new QueuesArray();

console.log( colaArray.enqueue(' first element ') );
console.log( colaArray.enqueue(' seconds element ') );
console.log( colaArray.print() );
console.log( colaArray.peek() );
console.log( colaArray.isEmpty() );
console.log( colaArray.dequeue() );


// Example using Object

class QueuesObject {

    constructor(){
        this.queues = {};
        this.front  = 0;
        this.end    = 0;
    }

    enqueue( element ){
        this.queues[this.end]  = element
        this.end++;
        return element;
    }

    dequeue(){
        if( this.front === this.end ) null;

        const elemnt = this.queues[this.front];
        delete this.queues[this.front];
        this.front++;
        return elemnt;
    }

    size(){
        return (this.end === this.front) ? null : this.end - this.front;
    }

    isEmpty(){
        return ( !this.end );
    }

    peek(){
        return ( this.isEmpty() ) ? null : this.queues[ this.front ];
    }

    print(){
        if( this.isEmpty() ) null;

        let result = '';
        for (let i = this.front; i < this.end; i++) {
            result += ' | ' + this.queues[i];
        }
        result += '|';
        return result;
    }

}


const queuesObject = new QueuesObject();

console.log( queuesObject.enqueue( ' first element ' ) );
console.log( queuesObject.enqueue( ' seconds element ' ) );
console.log( queuesObject.enqueue( ' third element ' ) );
console.log( queuesObject.print() );
console.log( queuesObject.peek() );
console.log( queuesObject.isEmpty() );
console.log( queuesObject.dequeue() );
console.log( queuesObject.size() );