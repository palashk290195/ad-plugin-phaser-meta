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
      "button",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAAxCAYAAABkkhOQAAABoElEQVR42u3dsUocQRjA8XmEg3irpoiVGJuARep7hDyCdXKaysJKbPQIiOSSVtRAICKKguQMsfARQgoLq2BIZYoUeYDLfosrV6SITcDZ38APZrb8+LNss0xKN2tsfdApeqc7472P52Hy1ach3Hd1z9F2NJ5GVzw0JJogWq+ib68P5uuH09tfh08Of1Sefv4N917dc7Rddx7Np8ne4EscHr+/NCiyFo1X8ZfNp9g83DgzGBqhfuunemMoCB+ED8IH4YPwQfggfBA+CB+ED8IH4YPwQfggfBA+3Dn82eNryMY/h//owxVkQ/gIX/gIX/gIX/gIH4QPwgfhg/BB+CB8ED4IH4QPwof/Ff7U3ncDIwvR8l/Dn1g7qTZzJz/9mkbWovFoPZpPE6sH1WHm3YXhkLVovAq/bD4VS1u3r39XfpL9VZ9xyXPZfCpevh2Or+y79ZpGiNaj+TS22P9Vxb+8O6y/9yE30XY0Hq1H86lYeHMUB2iMsvnUerH5zDBoktbzzU6K1e6+3jEQmiBaT6PrQbc/X3T73wyHLJVtR+N1738A9e9irpEFJsIAAAAtdEVYdFNvZnR3YXJlAGJ5LmJsb29kZHkuY3J5cHRvLmltYWdlLlBORzI0RW5jb2RlcqgGf+4AAAAASUVORK5CYII="
    );
  }

  create() {
    this.scene.start("Game");
  }
}
