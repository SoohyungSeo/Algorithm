const LinkedList = (() => {
    class LinkedList {
        constructor(){
            this.length = 0;
            this.head = null;
        }
        add(value){
            const node = new Node(value);
            let current = this.head;
            if(!current) {
                this.head = node;
                this.length++;
                return node;
            } else {
                while(current.next) {
                    current = current.next;
                }
                current.next = node;
                this.length++;
                return node;
            }
        }

        remove(position) {
            let current = this.head;
            let before, remove, count = 0;
            if(position === 0){
                remove = this.head;
                this.head = this.head.next;
            } else {
                while(count < position){
                    before = current;
                    remove = current.next;
                    count++;
                    current = current.next;
                }
                before.next = remove.next;
            }
            this.length--;
            return remove;
        }

        search(position){
            let current = this.head;
            let count = 0;
            while(count < position){
                current = current.next;
                count++
            }
            return current.data;
        }    
    }

    class Node {
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }
    return LinkedList;    
})();


