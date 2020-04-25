
class Conway{
  constructor(board,cellsize,elem){
    this.board = board;
    this.cellsize = cellsize;
    this.elem = elem;

    this.start = document.querySelector(".start");
    this.reset = document.querySelector(".reset");

    this.container = document.createElement(this.elem);
    this.container.className = "grid-container";
    // console.log(this.container);

    this.container.style.gridTemplateColumns = `repeat(${this.board[0].length},${this.cellsize}px)`;
    document.body.insertBefore(this.container,this.start);
    this.play = true;
    this.showBoard(this.board,"cells");
    // this.run();
    // this.stop();
  }

    // let clonedBoard = this.board.flat();


  showBoard(board,attrname){
    this.clonedBoard = board;
    let height = board.length-1;
    let width = board[0].length - 1;
    let boundary = 0;

    this.clonedBoard.map((rows,rowx) => {
        rows.forEach((val,colx) => {
          let grid = this.createGrid(this.elem,attrname);
          grid.textContent =  `${colx}`;
          if(this.play){
          grid.addEventListener("click", (e) => {
            e.target.style.background = "black";
            e.target.style.transition = "background 0.9s";
            this.clonedBoard[rowx][colx] = 1;
            e.preventDefault();
            });
          }
          this.container.appendChild(grid);
        });
      });

  }

  createGrid(elem,attrname){
    let grid = document.createElement(elem);
    grid.className = attrname;
    return grid;
  }

  stop(){
    this.play = false;
    this.reset.addEventListener("click",this.showBoard);
  }

  run(){
    this.play = true;
    this.showBoard;
  }

  adjacentCells(rowx,colx){
    // let position = [rowx,colx];
    let prevrow = rowx-1;
    let nextrow = rowx+1;
    let prevcol = colx-1;
    let nextcol = colx+1;
    const limitH = this.board[0].length-1;
    const limitV = this.board.length-1;
    const boundary = 0;

    if((prevrow>=boundary && prevrow<=limitV) && (nextrow<=limitV) &&
    (prevcol>=boundary && prevcol <= limitH ) && (nextcol<limitH) ){
      matrixAdjacent = [graph[prevrow][prevcol], graph[prevrow][colx], graph[prevrow][nextcol],
      graph[rowx][prevcol], graph[rowx][nextcol],
      graph[nextrow][prevcol], graph[nextrow][colx], graph[nextrow][nextcol]
    ]
  }else{
      if(nextrow>limitV) nextrow = boundary;
      if(prevrow<boundary)  prevrow = limitV;
      if(prevcol<boundary) prevcol = limitH;
      if(nextcol>limitH) nextcol = boundary;
        // console.log(prevrow);
        // console.log(nextrow);
        matrixAdjacent = [graph[prevrow][prevcol], graph[prevrow][colx], graph[prevrow][nextcol],
        graph[rowx][prevcol], graph[rowx][nextcol],
        graph[nextrow][prevcol], graph[nextrow][colx], graph[nextrow][nextcol]
      ]
  }
    return matrixAdjacent;
  }

}

const board = [[0,0,0,0,0,0],
[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],
[0,0,0,0,0,0],[0,0,0,0,0,0]];
let conway = new Conway(board,45,"div");
startbtn = document.querySelector(".start");
startbtn.addEventListener("click",conway.run());
    // conway.showBoard(board,"cells");
