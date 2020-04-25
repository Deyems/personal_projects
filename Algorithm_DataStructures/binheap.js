// class Node{
//   constructor(val){
//     this.left = null;
//     this.right = null;
//   }
// }

class MaxBinaryHeap{
  constructor(){
    this.values = [];
  }

  insert(val){
    if(this.values.length === 0){
      this.values.push(val);
    }else{
      this.values.push(val);
      //SWAP VALUES
      //IF last value is > previous one
      let childIdx = this.values.length - 1;
      let parentIdx = Math.floor((childIdx - 1) /2);
      let counter = 0;
      while(this.values[parentIdx]<this.values[childIdx]){
        [this.values[childIdx],this.values[parentIdx]] =
         [this.values[parentIdx],this.values[childIdx]];
         console.log("swapped ",++counter,"times");
         childIdx = parentIdx;
         parentIdx = Math.floor((childIdx - 1) /2);
        //  childIndex =
      }

    }
    return this.values;
  }
//##########################
// MY OWN REMOVE METHOD FROM HEAP.
// NOT PERFORMING PERFECTLY
//#####################
  // removeMax(){
  //
  //   let idxMax = 0;
  //   let lastIdx = this.values.length - 1;
  //   //Swap last element with first;
  //   [this.values[idxMax],this.values[lastIdx]] =
  //    [this.values[lastIdx],this.values[idxMax]];
  //   let max = this.values.pop();
  //   let leftIdx = (2*idxMax)+1;
  //   let rightIdx = (2*idxMax)+2;
  //   console.log(this.values,"b4 loop");
  //
  //   if(this.values[leftIdx] === undefined) return this.values;
  //   if(this.values[rightIdx] === undefined) return this.values;
  //
  //   while(true){
  //     if(this.values[leftIdx]>this.values[rightIdx]){
  //         // console.log(++counter,"time(s)");
  //       [this.values[idxMax],this.values[leftIdx]] =
  //        [this.values[leftIdx],this.values[idxMax]];
  //       //  console.log(idxMax,leftIdx);
  //         idxMax = leftIdx;
  //         leftIdx = (2*idxMax)+1;
  //         console.log(idxMax,leftIdx,rightIdx);
  //         rightIdx = (2*idxMax)+2;
  //         if(leftIdx > this.values.length) break;
  //     }else if(this.values[rightIdx]>this.values[leftIdx]){
  //
  //       [this.values[idxMax],this.values[rightIdx]] =
  //        [this.values[rightIdx],this.values[idxMax]];
  //        idxMax = rightIdx;
  //        rightIdx = (2*idxMax)+2;
  //        leftIdx = (2*idxMax)+1;
  //        console.log("On the right side",idxMax,leftIdx,rightIdx);
  //        if(rightIdx > this.values.length) break;
  //     }
  //   }
  //
  //   return this.values;
  // }

  extractMax(){
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
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
        if(leftChild > elemToSink) swap = leftChildIdx;
      }

      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if((swap === null && rightChild > elemToSink)||
           (swap !== null && rightChild > leftChild)
          ) { swap = rightChildIdx; }
      }
      if(swap === null) break;
      [this.values[idx],this.values[swap]] =
      [this.values[swap],elemToSink];
      idx = swap;
    }

  }

} //END OF CLASS
