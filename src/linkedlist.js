// Linked List (Listada enlazada)

class Node {
    
    constructor( data , next ){
        this.data = data;
        this.next = next;
    }

}

class LinkedList {

    constructor(){
        this.head = null;
        this.size = 0;
    }

    add( data ){
        
        const newNode = new Node( data , null );

        if( !this.head ){
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while ( currentNode.next ) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.size++;
        return data;
    }

    insertAt( data , index ){

        if( index > this.size || index < 0) null;

        const newNode   = new Node( data , null );
        let currentNode = this.head;
        let beforeNode;

        if( index === 0 ){
            newNode.next = currentNode;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                beforeNode  = currentNode;
                currentNode = currentNode.next;
            }   

            newNode.next = currentNode;
            beforeNode.next = newNode;   
        }
        this.size++;
        return data;
    }

    print(){

        if( !this.size ) null;

        let currentNode = this.head;
        let result = '';
            
        while ( currentNode ) {
            result += currentNode.data + ' -> ';
            currentNode = currentNode.next;
        }

        result += ' X ';
        return result;

    }

    removeData( data ){

        let currentNode = this.head;
        let beforeNode  = null;

        while ( currentNode != null ) {
            
            if( currentNode.data === data ){
                if( !beforeNode ){
                    this.head = currentNode.next;
                }else{
                    beforeNode.next = currentNode.next;
                }
                this.size--;
                return currentNode.data;
            }

            beforeNode = currentNode;
            currentNode = currentNode.next;
        }
        return null;
    }

    removeAtData( index = this.size + 1){
        if( index < 0 || index > this.size) return null;

        let currentNode = this.head;
        let beforeNode = null;
        
        if( index === 0 ){
            this.head = currentNode.next;
            return currentNode.data;
        } else {
            for (let i = 0; i < index; i++) {
                beforeNode = currentNode;
                currentNode = currentNode.next;
            }
            beforeNode.next = currentNode.next;
        }
        this.size--;
        return currentNode.data;
    }   


    getSize(){
        return (this.size === 0) ? null : this.size;
    }

    isEmpty(){
        return (!this.size);
    }


}   


const lindekList = new LinkedList();

console.log( lindekList.add('first element') );
console.log( lindekList.add('second element') );

console.log( lindekList.insertAt('third element', 2) );

console.log( lindekList.isEmpty() );
console.log( lindekList.getSize() );

console.log( lindekList.removeData('second element') );

console.log( lindekList.removeAtData(1) );

console.log( lindekList.print() );

console.log( lindekList );

