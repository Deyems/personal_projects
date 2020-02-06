/*
const reverseArray = (arr = []) => {
//    if(Array.isArray(arr)) {
        const entries = [];
        const lastIndex = arr.length - 1;
    
        for( let i = lastIndex; i >= 0; i--) {
//            entries.unshift(arr[i]);
            entries.push(arr[i]);
//            Used to Debug 
//            console.log(arr[i],entries[i]);
        }
    return entries;

//    }else{
//        console.log(`Your input is not an array`);
//    }
}

//console.log(reverseArray([1,3,6]));
*/

//const arrayToList = (arr) => {
//    arr.split(',');
////    for(let i=0; i < arr.length; i++){
//        let list = {
//            value: arr[0],
//            rest: {
//                value: arr[1];
//                rest: { }
//            }
//        }
////    }
//    
//}

//const repeat = (n, action) => {
//    for(let i = 0; i <n; i++){
//        action(i);
//    }
//}
//
//repeat(3, console.log);


//function countBy(items, groupName) { 
//    let counts = []; 
//    for (let item of items) { 
//        let name = groupName(item); 
//        let known = counts.findIndex(c => c.name == name); 
//        if (known == -1) { 
//            counts.push({name, count: 1});
//        } else { 
//            counts[known].count++; 
//        } 
//    } 
//    return counts; 
//}
//console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin", 
    "Alice's House-Post Office", "Bob's House-Town Hall", 
    "Daria's House-Ernie's House", "Daria's House-Town Hall", 
    "Ernie's House-Grete's House", "Grete's House-Farm", 
    "Grete's House-Shop", "Marketplace-Farm", 
    "Marketplace-Post Office", "Marketplace-Shop", 
    "Marketplace-Town Hall", "Shop-Town Hall"
];


function buildGraph(edges){
    //edges is an Array
    let graph = {};
    function addEdge(from, to) {
        if(graph[from] == null) {
            graph[from] = [to];
//            console.log(graph[from]);
        }else {
            graph[from].push(to);
            console.log(graph[from]);
            
        }
    }
    
    for(let [from,to] of edges.map(r => r.split('-'))){
        addEdge(from, to);
        addEdge(to,from);
    }
    
//        roadEdges.push(roads[i].split('-'));
//        roadEdges[i].split(',');
    return graph;
//    console.log(typeof graph);
}

buildGraph(roads);
//const roadGraph = buildGraph(roads);

//console.log(roadGraph);














