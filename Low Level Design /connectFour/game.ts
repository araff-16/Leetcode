import { ColorEnum, Player } from "./player";
import { Board } from "./board";

enum GameStateEnum {
  in_play,
  win,
  draw,
  not_started,
}

class Game {
  players: Player[] = [];
  playerTurn: Player | null = null;
  gameState: GameStateEnum = GameStateEnum.not_started;
  winningPlayer?: Player;
  board: Board;

  constructor(player1: Player, player2: Player, row: number, column: number) {
    this.players = [player1, player2];

    this.board = new Board(row, column);
  }

  makeMove(player: Player, column: number) {
    this.board.makeMove(player, column);
    this.checkForWin();
    this.checkfordraw();
  }

  checkForWin() {
    let player = this.board.checkForWin();
    if (player) {
      console.log(`${player.name} wins the game `);
    }
  }
  checkfordraw() {
    let draw = this.board.checkForDraw();

    if (draw) {
      console.log("A draw has been reached");
    }
  }

  restartGame(row: number, column: number) {
    this.board = new Board(row, column);
  }

  attempt() {
    this.board.attempt();
  }
}

let attempt1 = new Game(new Player("a", ColorEnum.red), new Player("a", ColorEnum.red), 6, 7);

attempt1.attempt();
