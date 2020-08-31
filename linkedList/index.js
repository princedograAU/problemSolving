import Node from '../Node';

// =====================================================================
//                  N O D E - I M P L E M E N T A T I O N
// =====================================================================
// 
// class Node {
//     /**
//      * Node class is used to create a node with data and pointer to next node for linear data structures.
//      * @param {data} data - that needs to be stored in a Node
//      * @param {next} next - points to the next node. Default value is null
//      */
//      constructor(data=null, next=null) {
//         this.data = data;
//         this.next = next;
//      }
// }


class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(data) {
        // create a new node
        const node = new Node(data);
        // check if head points to null
        if (!this.head) {
            this.head = node;
        }else {
            let cursor = this.head;
            while (cursor.next !== null) {
                cursor = cursor.next;
            }
            cursor.next = node;
        }
        // increment size of list by 1
        this.size += 1;
    }

    insertAt(data, index) {
        /**
         * Insert data at a specified index
         * @param {} data - item that needs to be inserted in the list
         * @param {Integer} index - position at which data needs will be inserted
         */

        // create new Node
        const node = new Node(data);

        // if index is zero 
        if (!index || index < 0) {
            // if head is not null then set node pointer to head
            if (this.head) {
                node.next = this.head;
            }
            // assign head to node
            this.head = node;
        } 
         else {
            // iterate through the list and find the position to insert the new node
            let cursor = this.head;
            let prevCursor = null;
            while (cursor !== null && index > 0) {
                index -= 1;
                prevCursor = cursor;
                cursor = cursor.next;
            }

            // if index is zero and cursor is not null
            // then index is found in the middle of the list
            // otherwise.. add node to the end of the linked list
            if (!index && cursor) {
                node.next = prevCursor.next;
                prevCursor.next = node;
            }else {
                prevCursor.next = node;
            }
        }
    }

    delete(index) {
        /**
         * Delete item from a linked list if index matches
         * @param {Integer} index - 
         */

        // if index < 0 or index greater than the size of linked list throw an error
        if (index < 0 || index > this.size || !this.head) {
            
            
            let message = !this.head ? `cannot delete from empty linked list`: `cannot delete from list as Index is less than 0 ot less than ${this.size}`;
            throw message;

        } else {
            // process the index and remove the appropriate node from the list
            let cursor = this.head;
            let prevCursor = null;
            while (cursor.next !== null && index > 0) {
                index -= 1;
                prevCursor = cursor;
                cursor = cursor.next;
            }

            // check if prevCursor is null
            if (!prevCursor) {
                this.head = this.head.next;
            } else {
                // deleting last element from the list
                prevCursor.next = cursor.next;  
            }
            // reducing the size of the list by 1
            this.size -= 1;
        }
    }

    traverse() {
        /**
         * Iterates over the linked list and stores the result in auxillary array that will be returned as result
         * @returns {array} array - contains all items in linked list
         */

        let cursor = this.head;
        const list = [];
        while (cursor !== null) {
            list.push(cursor.data);
            cursor = cursor.next;
        }

        return list;
    }

    getSize() {
        /**
         * @return {Integer} size - of the linked list
         */
        return this.size;
    }

    search(item) {
        /**
         * Search an item in the linked list. If item found then return index, otherwise returns -1 
         * @param {item} item - that needs to be searched in the linked list
         * @returns {Integer} index - the index of the item to be searched 
         */

        let cursor = this.head;
        let found = false;
        let index = 0;
        while(cursor !== null && !found) {
            if (cursor.data === item) {
                found = true;
            } else {
                index += 1;
                cursor = cursor.next;
            }
        }
        // if item not found then set index to -1
        if (!found) index = -1;

        return index;
    }
}

export default LinkedList;