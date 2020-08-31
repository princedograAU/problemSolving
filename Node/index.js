class Node {
    /**
     * Node class is used to create a node with data and pointer to next node for linear data structures.
     * @param {data} data - that needs to be stored in a Node
     * @param {next} next - points to the next node. Default value is null
     */
     constructor(data, next=null) {
        this.data = data;
        this.next = next;
     }
}

export default Node;