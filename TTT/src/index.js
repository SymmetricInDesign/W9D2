const View = require("./ttt-view.js")
const Game = require("../ttt_node/game.js")

document.addEventListener("DOMContentLoaded", () => {
  let figure = document.querySelector("figure")
  let game = new Game()
  console.log(game)
  let view = new View(game, figure) 
});


