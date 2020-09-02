export class Node {
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


export class TreeNode {
   /**
     * TreeNode class is used to create a node with data and pointer to left and right child for non-linear data structures.
     * @param {pointer} leftChild - link to the left child in the tree. Default value is null
     * @param {pointer} rightChild - link to the right child in the tree. Default value is null
     * @param {data} data - Value that needs to be stored in a Node
     */
    constructor(data, leftChild=null, rightChild=null) {
      this.data = data;
      this.leftChild = leftChild;
      this.rightChild = rightChild;
    }
}