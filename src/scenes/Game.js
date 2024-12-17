import { Scene } from "phaser";
import { networkPlugin, adStart, adEnd, adClose, adRetry } from "../networkPlugin.js";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  init() {
    adStart();
  }

  create() {
    this.cameras.main.setBackgroundColor(0x00ff00);

    // This is a simple example of how to use the Mintegral SDK,
    // you can replace this with your own game logic
    this.time.delayedCall(3000, () => {
      // call these when the game ends
      adEnd();
      adClose();
    });

    // This is needed for Mintegral when the retry button is clicked, remove it if you're not using Mintegral
    this.time.delayedCall(1000, () => {
      adRetry();
    });

    const button = this.add
      .image(this.game.config.width / 2, this.game.config.height / 2, "button")
      .setInteractive();
    button
      .on("pointerdown", () => {
        networkPlugin.ctaPressed();
      })
      .setScale(2.5);

    this.add
      .text(button.x, button.y, "Call to action!", {
        fontFamily: "Arial Black",
        fontSize: 48,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 8,
        align: "center",
      })
      .setOrigin(0.5);
  }
}
