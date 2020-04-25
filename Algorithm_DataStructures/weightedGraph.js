
class WeightedGraph {
  constructor() {
    this.adjList = {};
  }

  addVertex(v){
    if(!this.adjList[v]) this.adjList[v] = [];
  }

  addEdge(v1,v2,w){
    this.adjList[v1].push({node: v2,w});
    this.adjList[v2].push({node: v1,w});
  }

  pathFinder(start,end){
    //Create Distance Object - infinity values
    //Create Previous Object - null values
    //###Previous stores the last point to another point
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let nextNeighbour;


    //BuildUp of Initial States

    for(let vertex in this.adjList){
      if(vertex === start){
        distances[vertex] = 0;
        console.log("Is vertex a value? ",vertex)
        nodes.enqueue(vertex,0);
      }else{
        distances[vertex] = Infinity;
        nodes.enqueue(vertex,Infinity);
      }
      previous[vertex] = null;
    }
    console.log("Before While Loop",nodes);
    console.log("Before While Loop",previous);
    console.log("Before While Loop",distances);

    while(nodes.values.length){
      smallest = nodes.dequeue().val;
      console.log("Has the node reduced? ",nodes);
      // console.log(smallest);
      if(smallest === end){
        //We are DONE!!!
        console.log(distances);
        console.log(previous);
        return;
      }
      // console.log(smallest);

      // if(smallest || distances[smallest] !== Infinity){
      //   // console.log(this.adjList[smallest]);
      //   for(let neighbour in this.adjList[smallest]){
      //     // console.log(neighbour);
      //     //Find neighbouring Node
      //     let nextNode = this.adjList[smallest][neighbour];
      //     // console.log(nextNode);
      //     //Calculate new Distance to Neighbour
      //     // console.log(nextNode);
      //     let curDist = distances[smallest] + nextNode.w;
      //     let nextNeighbour = nextNode.node;
      //     // console.log(curDist);
      //     console.log(nextNeighbour);
      //
      //     if(curDist < distances[nextNeighbour]);
      //       distances[nextNeighbour] = curDist;
      //
      //       //Updating Previous - How we got to nextNeighbour
      //       console.log(curDist,smallest);
      //
      //       previous[nextNeighbour] = smallest;
      //
      //       // console.log("before",nodes);
      //       nodes.enqueue(nextNeighbour,curDist);
      //       // console.log("after",nodes);
      //   }
      //
      // }

    }


    console.log(nodes);
    console.log(previous);
    console.log(distances);
  } //END OF METHOD

}

class PriorityQueue{
  constructor(){
    this.values = [];
  }
  enqueue(val,priority){
    this.values.push({val,priority});
    this.sort();
  }
  dequeue(){
    return this.values.shift();
  }
  sort(){
    this.values.sort((a,b) => a.priority - b.priority);
  }
}




let g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B",4);
g.addEdge("A","C",2);
g.addEdge("B","E",3);
g.addEdge("C","D",2);
g.addEdge("C","F",4);
g.addEdge("D","E",3);
g.addEdge("D","F",1);
g.addEdge("E","F",1);

g.pathFinder("A","E");
