class Node{
  constructor(data){
    this.val = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data){
    let newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length +=1 ;
    return true;
  }

  transverse(){
    let current = this.head;
    let arr =[];
    while(current){
      // console.log(current);
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

    pop(){
      if(!this.head) return undefined;
      let current = this.head;
      let newTail = current;
      while(current.next){
        // console.log(current," begin");
        newTail = current;
        current = current.next;
        // console.log(current,"end");
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
        this.head = null;
        this.tail = null;
      }
      return current;
    }

    shift(){
      if(!this.head) return undefined;
      let curHead = this.head;
      this.head = curHead.next;
      this.length--;
      if(this.length === 0){
        this.tail = null;
      }
      return curHead;
    }

    unshift(data){
      let newNode = new Node(data);
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
      }else{
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return true;
    }

    get(idx){
      if(idx<0 || idx>=this.length) return undefined;
      let current = this.head;
      if(idx === 0) return current;

      for(let i = 0; i < idx; i++){
        current = current.next;
      }
      return current;
    }

    set(val,idx){
      let found = this.get(idx);
      if(!found) return false;
        found.val = val;
        return true;
    }

    insert(val,idx){
      let newNode = new Node(val);
      if(idx<0 || idx>this.length) return false;
      if(idx === this.length) return this.push(val);
      else if(idx === 0) return this.unshift(val);
      else{
        let before = this.get(idx-1);

        newNode.next = before.next;
        before.next = newNode;

        this.length++;
      }
      return true;
    }

    remove(idx){
      let removedNode;
      if(idx < 0 || idx >= this.length) return undefined;
      if(idx === 0) return this.shift();
      if(idx === this.length-1) return this.pop();
      else{
        // selected = this.get(idx);
        // let beforeSelected = this.get(idx-1);
        // beforeSelected.next = selected.next;
        let beforeSelected = this.get(idx-1);
        removedNode = beforeSelected.next;
        beforeSelected.next = removedNode.next;
        this.length--;
      }
      return removedNode;
    }

    reverse(){
      let oldnext,oldprev;
      let current = this.head;
      [this.head,this.tail] = [this.tail,this.head];
      oldprev = null;
      for(let i = 0; i < this.length; i++){
        [oldnext,current.next] = [current.next,oldprev];
        [oldprev,current] = [current,oldnext];
      }
      return this.transverse();
    }

  } //END OF LINKED LIST BLUE PRINT
