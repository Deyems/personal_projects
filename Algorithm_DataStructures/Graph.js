//UNDIRECTED GRAPH
class Graph{
  constructor(){
    this.adjList = {};
  }

  addVertex(vertex){
    if(!this.adjList[vertex]) this.adjList[vertex] = [];
    // else {
    //   this.adjList[vertex].push(val);
    // }
    return this.adjList;
  }

  addEdge(v1,v2){
    if(!this.adjList[v1] || !this.adjList[v2] ) {
      // this.addVertex(v1);
      return undefined;
    }
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  removeEdge(v1,v2){
    let newAssign = [];
    //THE ARRAY FILTER METHOD CAN BE USED INSTEAD TOO
    for(let i = 0; i< this.adjList[v1].length; i++){
      if(v2 !== this.adjList[v1][i]){
        newAssign.push(this.adjList[v1][i]);
      }
    }
    // console.log(newAssign);
    this.adjList[v1] = newAssign;

    let newAssign2 = [];
    for(let i = 0; i< this.adjList[v2].length; i++){
      if(v1 !== this.adjList[v2][i]){
        newAssign2.push(this.adjList[v2][i]);
      }
    }
    // console.log(newAssign2)
    this.adjList[v2] = newAssign2;

    // return this.adjList
  }

  removeVertex(v){
      for(let each of this.adjList[v]){
          this.removeEdge(each,v);
      }
    delete this.adjList[v];
    return this.adjList;
  }

  dfsRecursive(start){
    let result = [];
    let visited = {};
    let list= this.adjList;
    // let edge;
    function dfs(v){
      // console.log(this.adjList[v]);
      if(!v) return null;
      visited[v] = true;
      result.push(v);
      for(let edge of list[v]){
        if(!visited[edge]) dfs(edge);
      }
      // list[v].forEach((edge) => {
      //   if(!visited[edge]) return dfs(edge);
      // });
    }
    dfs(start);
    return result;
  }

  dfsIterative(start){
    let results = [];
    let visited = {};
    let stack = [];
    stack.push(start);

    while(stack.length > 0){
      let vertex = stack.pop();
      // console.log(vertex,stack);
      if(!visited[vertex]){
        visited[vertex] = true;
        results.push(vertex);
      stack.push(...this.adjList[vertex]);
      }
    }
    return results;
  }

  bfsIterative(start){
    let visited = {};
    let results = [];
    let queue = [start];
    // let stack = [start];
    // while (stack.length) {
      // let vertex = stack.pop();
//    ##ITERATING OVER THE WHOLE ADJACENCY LIST.
      // for(let key in this.adjList){
      //   for(let edge of this.adjList[key]){
      //     let vertex = edge;
      //     if(!visited[key]){
      //       visited[key] = true;
      //       results.push(key);
      //     }
      //     if(!visited[vertex]) {
      //       visited[vertex] = true;
      //       results.push(vertex);
      //     }
      //   }
      // }
      let vertex = queue[0];
      visited[vertex] =  true;
      while(queue.length){
        vertex = queue.shift();
        results.push(vertex);
        for(let neighbour of this.adjList[vertex]){
          if(!visited[neighbour]){
            visited[neighbour] =  true;
            queue.push(neighbour);
          }
        }
      }

      return results;
      // results.push(vertex);

      // if(!visited[vertex]){
      //   visited[vertex] = true;
      //   stack.push(...this.adjList[vertex]);
      // }

    // } //end of while
  }

}

let g = new Graph();

// g.addVertex("Tokyo");
// g.addVertex("Dallas");
// g.addVertex("Aspen");
// g.addVertex("Lagos");
// g.addVertex("Los Angeles");
//
// g.addEdge("Tokyo","Dallas");
// g.addEdge("Tokyo","Lagos");
// g.addEdge("Dallas","Aspen");
// g.addEdge("Dallas","Lagos");
// g.addEdge("Dallas","Los Angeles");
// g.addEdge("Lagos","Los Angeles");

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

g.dfsRecursive("A");

// {
//   "A": ["B","C"],
//   "B": ["A","D"],
//   "C": [A"","E"],
//   "D": ["B","E","F"],
//   "E": ["C","D","F"],
//   "F": ["D","E"]
// }
