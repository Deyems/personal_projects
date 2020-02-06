const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall ",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Ship-Town Hall"
];

//let graphMap = [];
//for(let i = 0; i < roads.length; i++) {
//    let graph = roads[i].split('-');
//    graphMap.push(graph);
//}
//
//let graphNetwork = {};
//for(const [from, to] of graphMap){
////    console.log(`${from} mapped to ${to}`);
//    if(graphNetwork[from] == null) {
//        graphNetwork[from] = [to];
//    } else{
//        graphNetwork[from].push(to);
//    }
//    
//}
//console.log(graphNetwork);

function buildGraph(edges) {
//    let graph = Object.create(null);
    let graph = {};
    function addEdge(from, to){
        if(graph[from] == null){
            graph[from] = [to];
        }else{
            graph[from].push(to);
        }
    }
    
    for([from, to] of roads.map(r => r.split('-'))){
        addEdge(from, to);
        addEdge(to,from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);

