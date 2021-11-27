// Double Linked List (Lista doblemente enlazada)

class Node {

    constructor( data, next , before ){
        this.data = data;
        this.next = next;
        this.before = before;
    }

}

class DoubleLinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addToHead(data){
        
        const newNode = new Node(data , this.head, null);
        if( this.head ){
            newNode.next = this.head;
            this.head.before = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    addToTail(data){

        const newNode = new Node( data , null , this.tail );
        if( this.tail ){
            newNode.before = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;

        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    insertAt(data, index){
        if( index < 0 || index > this.size ) {
            return null;
        };

        const newNode = new Node( data , null , null );
        let current = this.head;
        let before;

        if ( index === 0 ) {
            
            newNode.next = current;
            current.before = newNode;
            this.head = newNode;

        } else if (index === this.size){

            newNode.before = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;

        } else {
            
            for (let i = 0; i < index; i++) {
                before = current;
                current = current.next;
            }
            
            newNode.next   = current;
            newNode.before = before;
            
            current.before = newNode;
            before.next    = newNode;

        }
        this.size++;
    }

    removeFromHead(){
        if( !this.head ) return null;

        const valueToReturn = this.head.data;

        if( this.head === this.tail ){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.before = null;
        }
        this.size--;
        return valueToReturn;
    }

    removeFromTail(){

        if( !this.tail ) return null;

        const valueToReturn = this.tail.data;

        if( this.tail === this.head ){
            this.head = null;
            this.tail = null;            
        } else {
            this.tail = this.tail.before;
            this.tail.next = null;
        }
        this.size--;
        return valueToReturn;

    }

    removeData(data){

        let current = this.head;
        let before  = null;
        
        while ( current ) {

            if( current.data === data ){

                if( !before ){
                    
                    this.removeFromHead();

                } else if ( !current.next ){
                    
                    this.removeFromTail();

                } else {

                    before.next = current.next;
                    current.next.before = before;

                }  

                this.size--;

                return current.data;

            }

            before = current.next;
            current = current.next;
        }   
        return null;
    }


    print(){
        let current = this.head;
        let result = '';
        while ( current ) {
            result += current.data + ' <-> ';
            current = current.next;
        }

        return result += 'X';
    }

    printReverse(){
        let current = this.tail;
        let result = '';
        while ( current ) {
            result += current.data + ' <-> ';
            current = current.before;
        }

        return result += 'X';
    }

    getSize(){
        return this.size;
    }

    isEmpty(){
        return this.size === 0;
    }
}

const doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.addToHead(20);
doubleLinkedList.addToHead(10);

doubleLinkedList.addToTail(40);
doubleLinkedList.addToTail(30);

doubleLinkedList.removeData(10);

console.log( doubleLinkedList.print() );
