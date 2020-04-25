class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//ADD TO BEGINNING AND REMOVE AT THE END
//OR ADD TO THE END AND REMOVE FROM THE BEGINNING
//I.E ENQUEUE AND DEQUEUE

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //ADD TO THE END
  enqueue(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      // let lastOnQ = this.last;
      this.last.next = newNode;
      this.last = this.last.next;
    }
    return ++this.size;
  }
  //REMOVE FROM THE BEGINNING
  dequeue(){
    let firstIn = this.first;
    if(!this.first) return null;
    if(this.size === 1) {
      this.first = null;
      this.last = null;
    }else{
      this.first = this.first.next;
      firstIn.next = null;
      // console.log(firstIn);
    }
    --this.size;
    return firstIn.val;
  }


}
