class Node{
  constructor(val,priority){
    this.val = val;
    this.priority = priority;
  }
}


class PriorityQueue{
  constructor(){
    this.values = [];
  }

  // enqueue(val,priority){
  //   let newNode = new Node(val,priority);
  //   if(this.values.length === 0) this.values.push(newNode);
  //   else {
  //     this.values.push(newNode);
  //     // let newP = newNode.priority;
  //     //TO BUBBLE DOWN BASED ON PRIORITY
  //     //GET THE PARENT AND CHILD PRIORITY AND COMPARE
  //     let childIdx = this.values.length - 1;
  //     let parentIdx = Math.floor((childIdx-1)/2);
  //     let childP = this.values[childIdx].priority;
  //     let parentP = this.values[parentIdx].priority;
  //
  //     while(childIdx>-1 && parentIdx>-1){
  //       //SWAP THE NODES BASED ON THIS PRIORITY
  //       [this.values[childIdx],this.values[parentIdx]] =
  //       [this.values[parentIdx],this.values[childIdx]];
  //       childIdx = parentIdx;
  //       childP = this.values[childIdx].priority;
  //
  //       // if(!!this.values[parentIdx]) break;
  //
  //       parentIdx = Math.floor((childIdx-1)/2);
  //       parentP = this.values[parentIdx].priority;
  //
  //       if(!!this.values[parentIdx]) {
  //         parentIdx = 0;
  //         parentP = this.values[parentIdx].priority;
  //       }
  //
  //       if(parentP>=childP) break;
  //     }
  //
  //   }
  //   let nodeVals = [];
  //   for(let i = 0; i < this.values.length; i++){
  //     nodeVals.push(this.values[i].val);
  //   }
  //   console.log(nodeVals);
  //
  //   return this.values.length;
  // }

  enqueue(val,priority){
    let newNode = new Node(val,Math.floor(priority));
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx>0){
      let pIdx = Math.floor((idx -1)/2);
      let parent = this.values[pIdx];
      if(element.priority >= parent.priority) break;
      [this.values[pIdx],this.values[idx]] =
       [element,parent];
       idx = pIdx;
    }
  }

  dequeue(){
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
      return `Node val: ${min.val},Node Rank: ${min.priority}`;
    }
    return min;
  }

  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const elemToSink = this.values[0];
    while(true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild,rightChild;
      let swap = null;

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild.priority < elemToSink.priority) swap = leftChildIdx;
      }

      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if((swap === null && rightChild.priority < elemToSink.priority)||
           (swap !== null && rightChild.priority < leftChild.priority)
          ) { swap = rightChildIdx; }
      }
      if(swap === null) break;
      [this.values[idx],this.values[swap]] =
      [this.values[swap],elemToSink];
      idx = swap;
    }

  }

}
