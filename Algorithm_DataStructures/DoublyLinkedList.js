class Node{
  constructor(val,head,tail){
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data){
    let newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      let newTail = newNode;
      this.tail.next = newTail;
      newTail.prev = this.tail;
      //GET A NEW TAIL
      this.tail = newTail;
    }
    this.length++;
    return this;
  }

  pop(){
    let popped = this.tail;
    if(!this.tail) return undefined;
    if(this.length === 1) {
      popped.prev = null;
      this.head = null;
      this.tail = null;
    }
    else{
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }

  //TO REMOVE NODE FROM THE BEGINNING
  shift(){
    let oldHead = this.head;
    if(!this.head) return undefined;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.head = this.head.next; //NEW HEAD
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  //ADDS NODE TO A LIST AT THE BEGINNING
  unshift(data){
    let newNode = new Node(data);
    if(this.length === 0 ){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx){
    if(idx < 0 || idx>=this.length) return null;
    let middle = Math.floor(this.length/2);
    let current;

    if(idx > middle){
      //Start loop from right LENGTH-1;
      // console.log("Working from End");
      current = this.tail;
      for(let i= this.length-1; i>idx; i--){
        current = current.prev;
      }
    }else{
      //Start loop from LEFT;
      // console.log("Working from Start");
      current = this.head;
      for(let i = 0; i<idx; i++){
        current = current.next;
      }
    }
    return current;
  }

  set(data,idx){
    let replaced = this.get(idx);
    if(!replaced) return false;
    replaced.val = data;
    console.log(this);
    return true;
  }

  insert(data,idx){
    if(idx === this.length) return !!this.push(data);
    if(idx === 0) return !!this.unshift(data);
    // if(idx < 0 || idx > this.length)
    let newNode = new Node(data);
    let nodeFound = this.get(idx);

    if(!nodeFound) return false;
    else{
      let beforeNode = nodeFound.prev;
      newNode.next = nodeFound;
      newNode.prev = beforeNode;

      nodeFound.prev = newNode;
      beforeNode.next = newNode;
    }

    this.length++;
    return true;
  }

  remove(idx){
    if(idx === 0) return !!this.shift();
    if(idx === this.length-1) return !!this.pop();
    let removed = this.get(idx);

    if(!removed) return false;
    else{
      let afterNode = removed.next;
      let beforeNode = removed.prev;
      [beforeNode.next,afterNode.prev] = [afterNode,beforeNode]
      removed.next = null;
      removed.prev = null;
    }
    this.length--;
    return removed;
  }

}
