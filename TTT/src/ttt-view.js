class View {
  constructor(game, el) {
    this.game = game
    this.figure = el
    this.liHash = this.setupBoard()
    this.bindEvents()
  }

  setupBoard() {
    let liHash = {}
    let grid = document.createElement("ul")
    for (let i =0; i< 3; i++){
      for (let j = 0; j< 3; j++){
        let li = document.createElement('li')
        li.setAttribute('id', `${i},${j}`)
        grid.appendChild(li)
      }
    }
    this.figure.appendChild(grid)
    // console.log(liHash[])
    return liHash
  }
  
  bindEvents() {
    let lis = document.querySelectorAll("figure ul li")
    console.log(this.game)
    for(let i=0; i<9; i++){
      lis[i].addEventListener("click", this.handleClick.bind(this))
    }
  }

  handleClick(e) {
    let pos_str = e.target.getAttribute("id")
    let pos = pos_str.split(",").map((int)=>parseInt(int))
    console.log(pos)
    this.makeMove(pos, e.target)
  }
  
  makeMove(pos, el) {
    this.game.playMove(pos)
    if (this.game.isOver()) {
      this.game.board.print();
      if (this.game.winner()) {
        let winMessage = document.createElement("h2");
        winMessage.textContent = `${this.game.winner()} has won!`
        document.querySelector("body").appendChild(winMessage)
      } else {
        console.log('NO ONE WINS!');
      }
      // gameCompletionCallback();
    } 
    el.textContent = this.game.currentPlayer
    el.classList.add("white")
  }

}



module.exports = View;
