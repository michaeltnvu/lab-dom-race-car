window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game;

  startButton.addEventListener("click", function () {
    game = new Game();
    startGame();
  });

  restartButton.addEventListener("click", function () {
    location.reload();
  });

  function startGame() {
    game.start();
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        if (game.player.directionX > -2) {
          game.player.directionX -= 2;
        }
      }
      if (e.key === "ArrowRight") {
        if (game.player.directionX < 2) {
          game.player.directionX += 2;
        }
      }
      if (e.key === "ArrowDown") {
        if (game.player.directionY < 2) {
          game.player.directionY += 2;
        }
      }
      if (e.key === "ArrowUp") {
        if (game.player.directionY > -2) {
          game.player.directionY += 2;
        }
      }
      if (e.key === " ") {
        game.player.directionX = 0;
        game.player.directionY = 0;
      }
    });
  }
};
