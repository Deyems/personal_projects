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
    let graph = Object.create(null);
//    let graph = {};
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


class VillageState {
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }
    
    move(destination){
       if(!roadGraph[this.place].includes(destination)){
           return this;
       }else{
           let parcels = this.parcels.map(p => {
               if(p.place != this.place) return p;
               return {place: destination, address: p.address};
           }).filter(p => p.place != p.address);
           return new VillageState(destination,parcels);
       }
        
    }
    
}

let first = new VillageState("Post Office",[{place: "Post Office", address: "Alice's House"}]);

let next = first.move("Alice's House");

console.log("\n"+next.place);

//console.log("\n"+next.parcels);

//console.log("\n"+first.place);

function runRobot(state, robot, memory) { 
    for (let turn = 0;; turn++) { 
        if (state.parcels.length == 0) { 
            console.log(`Done in ${turn} turns`); 
            break; 
        } 
        let action = robot(state, memory); 
        state = state.move(action.direction); 
        memory = action.memory;
        console.log(`\nStored in memory: ${memory}`);
        console.log(`Moved to ${action.direction}`); 
    }
}


function randomPick(array) { 
    let choice = Math.floor(Math.random() * array.length); 
    return array[choice]; 
}
function randomRobot(state) {
    console.log('\n'+`Each state location is: ${state.place}`);
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) { 
    let parcels = []; 
    for (let i = 0; i < parcelCount; i++) { 
        let address = randomPick(Object.keys(roadGraph));
        console.log(`Going to: ${address}\n`);
        let place; 
        do { 
            place = randomPick(Object.keys(roadGraph)); 
        } while (place == address); 
        parcels.push({place, address}); 
    } 
    return new VillageState("Post Office", parcels); 
};

runRobot(VillageState.random(), randomRobot);


