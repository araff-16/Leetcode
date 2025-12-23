import { Player } from "./player";

class Token {
  player: Player;

  constructor(player: Player) {
    this.player = player;
  }
}

export { Token };
