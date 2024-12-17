import { Scene } from "phaser";
import { adReady } from "../networkPlugin";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    const overlay = document.getElementById("overlay");
    this.load.on("complete", () => {
      adReady();
      overlay.style.display = "none";
    });
  }

  preload() {
    this.load.image(
      "button", "assets/button.png"
    );
  }

  create() {
    this.scene.start("Game");
  }
}
