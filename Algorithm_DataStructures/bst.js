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
            // break;
          } else {
            current = current.left;
          }
        } else if(val > current.val){
            if(current.right === null){
              current.right = newNode;
              return this;
              // break;
            }else {
              current = current.right;
            }
        }
      }

    // //  while(this.root){
    //   if(val > this.root.val){
    //     // check for right node
    //     while(this.root.right && newNode.val > this.root.right.val ){
    //       if(!this.root.left){
    //         this.root.left = newNode;
    //         return this;
    //       }
    //       this.root = this.root.right;
    //     }
    //     this.root.right = newNode;
    //   }else{
    //     //Check for left node
    //     while(this.root.left && newNode.val > this.root.left.val ){
    //       if(!this.root.right){
    //         this.root.right = newNode;
    //         return this;
    //       }
    //       this.root = this.root.left;
    //     }
    //       this.root.left = newNode;
    //
    //   }
    //   // this.root = this.root.right;
    // // } // end of while

    } //IF there is root end
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


} //Class


// let tree = new Bst();
// tree.root = new Node(10);
