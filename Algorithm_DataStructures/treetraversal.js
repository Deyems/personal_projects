class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class Bst{
  constructor(){
    this.root = null;
  }

  insert(val){
    let newNode = new Node(val);
    if(!this.root) {
      this.root = newNode;
      // return this;
    }else{
      let current = this.root;
      while(true){
        if(val === current.val) return undefined;
        if(val<current.val){
          if(current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if(val > current.val){
            if(current.right === null){
              current.right = newNode;
              return this;
            }else {
              current = current.right;
            }
        }
      } // END OF WHILE LOOP

    } //WHEN ROOT IS PRESENT
    // return this;

  } //INSERT FXN END

  search(val){
    if(!this.root) return false;

    let current = this.root;
    while(true){
      if(val === current.val) return true;
      if(val < current.val){
        if(!current.right) return false;
        else current = current.left;
      }else if(val > current.val){
        if(!current.left) return false;
        else current = current.right;
      }
    }
  }

  breadthFirst(){
    if(!this.root) return undefined;
    let queue = [];
    let visited = []; let node = this.root;

    queue.push(node);
    while(queue.length){
      node = queue.shift();
      visited.push(node.val);
      if(node.left) queue.push(node.left); //console.log(node.left,`left node of  ${node.val}`)}
      if(node.right) queue.push(node.right); //console.log(node.right,`right node of  ${node.val}`)}
        // node = queue.shift();
    }

    // RECURSIVE WAY BUT NOT PERFECT;
    // function helpLoop(queue){
    //
    //   node = queue.shift();
    //   console.log(node.val,"origin loop");
    //
    //   visited.push(node.val);
    //   if(!node.left && !node.right){
    //     queue.push(node);
    //     console.log(node.val,"without left n right");
    //     visited.push(node.val);
    //     return visited;
    //   }
    //
    //   if(node.left && !node.right) {
    //     queue.push(node.left);
    //     helpLoop(queue);
    //   }
    //   if(node.right && !node.left) {
    //     queue.push(node.right);
    //     helpLoop(queue);
    //   }
    //   if(node.left && node.right) {
    //     queue.push(node.left);
    //     queue.push(node.right);
    //     helpLoop(queue);
    //   }
    // } //HELPER FXN

    // helpLoop(queue);

    return visited;
  }

  dfsPreOrder(){
    let node = this.root;
    let visited = [];
    function helpSearch(node){
      visited.push(node.val);
      if(node.left) helpSearch(node.left);
      if(node.right) helpSearch(node.right);
    }
    helpSearch(node);
    return visited;
  }

  dfsPostOrder(){
    let node = this.root;
    let visited = [];
    function toBottom(node){
      if(node.left) toBottom(node.left);
      if(node.right) toBottom(node.right);
      visited.push(node.val);
    }
    toBottom(node);
    return visited;
  }

  dfsInOrder(){
    let node = this.root;
    let visited = [];
    function tranverseDownUp(node){
      if(node.left) tranverseDownUp(node.left);
      visited.push(node.val);
      if(node.right) tranverseDownUp(node.right);
    }
    tranverseDownUp(node);
    return visited;
  }


} //Class

let sectree = new Bst();
sectree.insert(10);
sectree.insert(3);
sectree.insert(15);
sectree.insert(8);
sectree.insert(6);
sectree.insert(20);

let tree = new Bst();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);


 //     10
 //   3     15
 //     8      20
//    6

//             10
//        6         15
//    3       8           20
