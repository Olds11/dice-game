class DiceGame {
	constructor() {
		this.scores = [0,0];
		this.roundScore = 0;
		this.activePlayer = 0;
		this.gameOn = true;
		this.rollDiceButton = document.getElementById("rollDice");
		this.holdButton = document.getElementById("holdButton");
		this.newGameButton = document.getElementById("newGame");
		this.dice = document.getElementById("dice");
		this.endTurnWarning = document.getElementById("end-turn-warning");
		this.events();
	}

	events() {
		this.rollDiceButton.addEventListener("click", this.rollDice.bind(this));
		this.holdButton.addEventListener("click", this.holdScore.bind(this));
		this.newGameButton.addEventListener("click", this.newGame.bind(this));
	}

	rollDice () {
		this.endTurnWarning.style.display = "none";
		let playerBox = document.querySelector("#player-" + this.activePlayer + "-box");
		playerBox.classList.add("currentPlayerColor");
		if (this.gameOn) {
			let diceRoll = Math.floor(Math.random() * 6) + 1;
			let currentScore = document.getElementById("roundScore-" + this.activePlayer);
			if (diceRoll != 1) {
				this.roundScore += diceRoll;
				this.dice.style.display = "block";
				this.dice.src = "dice-" + diceRoll + ".png";
				currentScore.innerHTML = this.roundScore;
			} else {
				this.roundScore = 0;
				this.dice.src = "dice-" + diceRoll + ".png";
				playerBox.classList.remove("currentPlayerColor");
				currentScore.innerHTML  = this.roundScore;
				this.activePlayer = this.activePlayer == 0 ? 1 : 0;
				this.dice.style.display = "none";
				this.endTurnWarning.style.display = "block";
			}
		}
	}

	holdScore() {
		this.scores[this.activePlayer] += this.roundScore;
		let globalScore = document.getElementById("global-" + this.activePlayer);
		globalScore.innerHTML  = this.scores[this.activePlayer];
		this.roundScore = 0;
		let currentScore = document.getElementById("roundScore-" + this.activePlayer);
		let playerBox = document.querySelector("#player-" + this.activePlayer + "-box");
		let playerTitle = document.querySelector("#player-" + this.activePlayer + "-box" + " .playerTitle");
		currentScore.innerHTML  = this.roundScore;
		if (this.scores[this.activePlayer] < 100) {
				playerBox.classList.remove("currentPlayerColor");
				this.activePlayer = this.activePlayer == 0 ? 1 : 0;
		} else {
			playerBox.classList.add("winner");
			playerTitle.innerHTML = "Winner!";
			this.gameOn = false;
		}

	}

	newGame() {
		this.gameOn = true;
		this.roundScore = 0;
		this.scores = [0,0];
		let playerZeroBox = document.querySelector("#player-0-box");
		let playerOneBox = document.querySelector("#player-1-box");
		let playerZeroTitle = document.querySelector("#player-0");
		let playerOneTitle = document.querySelector("#player-1");
		let playerZeroGlobalScore = document.getElementById("global-0");
		let playerOneGlobalScore = document.getElementById("global-1");
		let currentScorePlayerZero = document.getElementById("roundScore-0");
		let currentScorePlayerOne = document.getElementById("roundScore-1");
		playerZeroBox.classList.remove("winner", "currentPlayerColor");
		playerOneBox.classList.remove("winner", "currentPlayerColor");
		playerZeroTitle.innerHTML = "PLAYER 1";
		playerOneTitle.innerHTML = "PLAYER 2"
		playerZeroGlobalScore.innerHTML = this.scores[0];
		playerOneGlobalScore.innerHTML = this.scores[1];
		currentScorePlayerOne.innerHTML = 0;
		currentScorePlayerZero.innerHTML = 0;
		this.activePlayer = 0;
		this.dice.style.display = "none";
		this.endTurnWarning.style.display = "none";

	}




}

var diceGame = new DiceGame();


// var playerOneScore, playerTwoScore, roundScore, gameOn;

// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;
// gameOn = true;


// document.getElementById("rollDice").addEventListener("click", function () {
// 	if (gameOn) {
// 		var diceRoll = Math.floor(Math.random() * 6) + 1;
// 		if (diceRoll != 1) {
// 			roundScore += diceRoll;
// 			document.getElementById("dice").style.display = "block";
// 			document.getElementById("dice").src = "dice-" + diceRoll + ".png";
// 			document.getElementById("roundScore-" + activePlayer).innerHTML = roundScore;
// 		} else {
// 			roundScore = 0;
// 			document.getElementById("dice").src = "dice-" + diceRoll + ".png";
// 			document.getElementById("roundScore-" + activePlayer).innerHTML  = roundScore;
// 			activePlayer = activePlayer == 0 ? 1 : 0;
// 		}
// 	}
// });


// document.getElementById("holdButton").addEventListener("click", function () {
// 	scores[activePlayer] += roundScore;
// 	document.getElementById("global-" + activePlayer).innerHTML  = scores[activePlayer];
// 	roundScore = 0;
// 	document.getElementById("roundScore-" + activePlayer).innerHTML  = roundScore;
// 	if (scores[activePlayer] < 100) {
// 		activePlayer = activePlayer == 0 ? 1 : 0;
// 	} else {
// 		document.querySelector(".player-" + activePlayer + "-box").classList.add("winner");
// 		document.querySelector(".player-" + activePlayer + "-box" + " .playerTitle").innerHTML = "Winner!";
// 		gameOn = false;
// 	}

// });

// document.getElementById("newGame").addEventListener("click", function () {
// 	gameOn = true;
// 	roundScore = 0;
// 	scores = [0,0];
// 	document.querySelector(".player-0-box").classList.remove("winner");
// 	document.querySelector(".player-1-box").classList.remove("winner");
// 	document.querySelector("#player-0").innerHTML = "PLAYER 1";
// 	document.querySelector("#player-1").innerHTML = "PLAYER 2"
// 	document.getElementById("global-0").innerHTML = scores[0];
// 	document.getElementById("global-1").innerHTML = scores[0];


// })




