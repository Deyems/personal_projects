
const mountains = [
    {
        name: "kilimanjaro",
        height: 50,
        place: "osun"
    },
    {
        name: "Olumo rock",
        height: 65,
        place: "Abeokuta"
    },
    {
        name: "Abeere",
        height: 40,
        place: "Lagos"
    }
];

function drawTable(data){
    let table = document.createElement("table");

let theadrow = document.createElement("tr");
let header = Object.keys(data[0]);

for(let i = 0; i < header.length; ++i){
    let th = document.createElement("th");
    th.textContent = header[i];
    theadrow.appendChild(th);
}
table.appendChild(theadrow);

for(let i = 0; i < data.length; ++i){
    let tr = document.createElement("tr");
    for(let key in data[i]){
        let td = document.createElement("td");       
        td.textContent = data[i][key];
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
//console.log(table);
    return table;
}

//drawTable(mountains);

document.getElementById("mountains").appendChild(drawTable(mountains));


function byTagName(node, tagName){
    let arrTags = [];
    
    Array.from(node.children).forEach(nodeEdge => {
        if(Array.from(nodeEdge.children).length == 0){
            //SEARCH inside node
            if(nodeEdge.nodeName.toLowerCase() == tagName ){
            
            arrTags.push(nodeEdge.nodeName.toLowerCase());
            }
        }else if(Array.from(nodeEdge.children).length >= 1){
            console.log(Array.from(nodeEdge.children).length);
            Array.from(nodeEdge.children).forEach( (elem) => {
                if(elem.nodeName.toLowerCase() == tagName){
                    arrTags.push(elem.nodeName.toLowerCase());
                }
            });
        }
//        console.log(nodeEdge.children);
});
    return arrTags;
}

//console.log(byTagName(document.body,"table"));

let btn = document.querySelector("button");

function print(){
    console.log('MY button is been tapped by a click');
    btn.removeEventListener('click', print)
}

btn.addEventListener("click", print);



