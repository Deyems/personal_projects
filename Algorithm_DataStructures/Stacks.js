class Node{
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

//involves REMOVING AND ADDING AT THE BEGINNING!!!
  push(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      let newLast = newNode;
      newLast.next = this.first;
      this.first = newLast;

    }
    return ++this.size;
  }

  pop(){
    if(!this.first) return null;
    if(this.size === 1) {
      this.last = null;
      this.first = null;
    }else{
      let removed = this.first;
      this.first = this.first.next;
      removed.next = null;
      console.log(removed);
    }

    return --this.size;
  }

}
