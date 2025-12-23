import { Token } from "./token";
import { Player } from "./player";

class Board {
  playingfield: (Token | null)[][] = [];
  row: number;
  column: number;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
    this.setupBoard(row, column);
  }

  setupBoard(row: number, column: number) {
    for (let i = 0; i < row; i++) {
      let rowarray = [];
      for (let j = 0; j < column; j++) {
        rowarray.push(null);
      }
      this.playingfield.push(rowarray);
    }
  }

  makeMove(player: Player, colum: number) {
    //first we check
    if (this.checkIfValidCol(colum)) {
      const token = new Token(player);
      const nextAvailableRow = this.findNextAvailbleRow(colum);
      this.playingfield[nextAvailableRow][colum] = token;
    } else {
      console.log("column is full");
    }
  }

  findNextAvailbleRow(column: number): number {
    for (let i = 0; i < this.playingfield.length; i++) {
      if (!this.playingfield[i][column]) {
        return i;
      }
    }

    throw new Error("No spot found");
  }

  checkIfValidCol(column: number): boolean {
    // for this we only need to chekc the last row for the column if it has space we now a token acan placed in the column

    if (!this.playingfield[this.row][column]) {
      return true;
    }
    return false;
  }

  checkForWin(): Player | null {
    //logic to check for winner
    //returns player if winner found

    return null;
  }

  checkForDraw(): boolean {
    //logic for checking draw
    //returns true for draw

    return false;
  }

  attempt() {
    console.log("Yes this works");
  }
}

export { Board };
