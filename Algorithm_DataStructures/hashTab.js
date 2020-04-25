class HashTable{
  constructor(size = 53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    let min = Math.min(key.length,100);
    for(let i = 0; i < min; i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME +value) % this.keyMap.length;
    }
    return total;
  }

  set(key,val){
    let index = this._hash(key);
    // console.log(index);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
      this.keyMap[index].push([key,val]);
  }

  get(key){
    let retindex = this._hash(key);
    if(!this.keyMap[retindex]) {
      // console.log("Before others");
      return false;
    }
    else{
        if(this.keyMap[retindex].length === 1){
          // console.log(this.keyMap[retindex][0]);
            if(this.keyMap[retindex][0][0] === key) {
              return this.keyMap[retindex][0][1];
            }else return false;
        }else{
          //Loop through the array
            for(let arr of this.keyMap[retindex]){
                if(arr[0] === key) return arr[1];
            }
          }
    }
    return false;
  } // END of Method get

  keys(){
    let keyCollection = [];
    if(this.keyMap.length === 0) return null;
    for(let i = 0; i < this.keyMap.length; i++){
      if(!this.keyMap[i]) continue;
        for(let arr of this.keyMap[i]){
          // console.log(arr);
          if(!keyCollection.includes(arr[0])){
          keyCollection.push(arr[0]);
          }
        }
    }
    return keyCollection;
  }

  values(){
    let valueCollection = [];
    if(this.keyMap.length === 0) return null;
    for(let i = 0; i < this.keyMap.length; i++){
      if(!this.keyMap[i]) continue;
        for(let arr of this.keyMap[i]){
          // console.log(arr);
          if(!valueCollection.includes(arr[1])){
          valueCollection.push(arr[1]);
          }
        }
    }
    return valueCollection;
  }

}

let ht = new HashTable(11);

ht.set("maroon","#800000");
ht.set("yellow","#FFFF00");
ht.set("olive","#808000");
ht.set("salmon","#FA8072");
ht.set("lightcoral","#F08080");
ht.set("mediumvioletred","#C71585");
ht.set("plum","#DDA0DD");
