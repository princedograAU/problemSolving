import LinkedList from './index';


const setUp = () => {
    
}

describe('Linked List insertion', () => {
    let list;
    beforeEach(() => {
        // Initializing linked list
        list = new LinkedList();
        
        // creating linked list of 5 items
        list.insert(5);
        list.insert(4);
        list.insert(3);
        list.insert(2);
        list.insert(1);
    });
    test('should create a new linked list with 5 items', () => {
        
        expect(list.traverse()).toEqual([5,4,3,2,1]);
    });
    
    test('should insert the item at the beginning of the list if index is 0', () => {
        
        list.insertAt(0, 0);
        expect(list.traverse()).toEqual([0,5,4,3,2,1]);
    });

    test('should insert the item at an index 2', () => {
        
        list.insertAt(0, 2);
        expect(list.traverse()).toEqual([5,4,0,3,2,1]);
    });

    test('should insert the item at the end of the list when index is 100', () => {
        
        list.insertAt(0, 99);
        expect(list.traverse()).toEqual([5,4,3,2,1,0]);
    });

    test('should insert the item at the end of the list when an index is equal to the size of list', () => {
        
        list.insertAt(0, 5);
        expect(list.traverse()).toEqual([5,4,3,2,1,0]);
    });

    test('should insert the item at the front of the list when an index is less than zero', () => {
        
        list.insertAt(0, -99);
        expect(list.traverse()).toEqual([0,5,4,3,2,1]);
    });
});


describe('Linked List deletion', () => {
    /**
     * Deletion test cases
     */
    let list;
    beforeEach(() => {
        // Initializing linked list
        list = new LinkedList();
        
        // creating linked list of 5 items
        list.insert(5);
        list.insert(4);
        list.insert(3);
        list.insert(2);
        list.insert(1);
    });

    test('should delete first item from the list when list has more than 1 element', () => {
        list.delete(0);
        expect(list.traverse()).toEqual([4,3,2,1]);
    });

    test('should throw an error if trying to delete from an empty linked list', () => {
        list.delete(0);
        list.delete(0);
        list.delete(0);
        list.delete(0);
        list.delete(0);
        expect(() => {
            list.delete(0);
        }).toThrow('cannot delete from empty linked list');
    });

    test('should throw an error if trying to delete an item from index -1', () => {
        expect(() => {
            list.delete(-1);
        }).toThrow(/cannot delete from list as Index is less than 0 ot less than/);
    });

    test('should throw an error if trying to delete an item from index 100', () => {
        expect(() => {
            list.delete(100);
        }).toThrow(/cannot delete from list as Index is less than 0 ot less than/);
    });


    test('should delete an item from list at a specified index', () => {
        list.delete(2);
        expect(list.traverse()).toEqual([5,4,2,1]);
    });

    test('should delete the last item from the list', () => {
        list.delete(5);
        expect(list.traverse()).toEqual([5,4,3,2]);
    });
    
});

// Test cases for testing search functionality in Linked list
describe('Linked list search', () => {
    let list;
    beforeEach(() => {
        // Initializing linked list
        list = new LinkedList();
        
        // creating linked list of 5 items
        list.insert(5);
        list.insert(4);
        list.insert(3);
        list.insert(2);
        list.insert(1);
    });
    
    test('should search 2 successfully in the linked list', () => {
        expect(list.search(2)).toBe(3);
    })

    test('should return -1 when searching for item 11', () => {
        expect(list.search(11)).toBe(-1);
    })
    
})


