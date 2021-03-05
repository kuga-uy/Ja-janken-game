// HI, GAME START AT THE BOTTOM

//selectors

const playerOptions = document.querySelectorAll(".player_option");
const promptContainer = document.querySelector(".prompt_container");
const promptOnLoad = document.addEventListener("load", displayPrompt());
const submitButton = document.querySelector(".play_button");
let playerDefaultName = document.querySelector(".player_name");
const promptName = document.querySelector(".name_input");
let playerScoreText = document.querySelector(".player_score");
let cpuScoreText = document.querySelector(".cpu_score");
let winnerAlert = document.querySelector(".winner_container");
let drawScoreText = document.querySelector(".draws_counter");

//prompt display onload

function displayPrompt() {
	promptContainer.classList.add('change');
}

//add the input value to playerDefaultName and hide the prompt container.
function addPlayerName(element) {
	element.preventDefault();
	playerDefaultName.textContent = promptName.value;
	hideContainer();
	function hideContainer() {
		promptContainer.style.display = "none";
	}
}

//players class

class Players {
	constructor(playerName, score) {
		this.playerName = playerName;
		this.score = score;
	}
	roundWinner(name) {
		winnerAlert.textContent = `${name} wins the round`;
		setTimeout(() => {
			winnerAlert.style.display = "none";
		}, 2000);
		winnerAlert.style.display = "flex";
		if (name == null) {
			winnerAlert.textContent = "DRAW";
		}
	}
}
//Players's instances
const User = new Players(playerDefaultName, 0);
const Cpu = new Players("CPU", 0);

//counter  for the draws
let drawCounter = 0;

// cpu Options

const cpuOptions = {
	rock: 0,
	paper: 1,
	scissors: 2,
};

//cpu choice
function cpuChoice(min = 0, max = 3) {
	let cpuElection = Math.floor(Math.random() * (max - min));
	return cpuElection;
	
}

//Game beginning
function gameBeginning (element) {
	const playerSelection = element.target.id;
	const cpuSelection = cpuChoice();
	cpuHandChange(cpuSelection);
	const battle = gameLogic( playerSelection, cpuSelection);
	return  battle;
};

//Game's logic

function gameLogic(player, cpu) {
	if (player == 'scissors' && cpu == cpu.paper){
		playerHand.src = 'assets/player-scissors.png';
	}
	if (
		(player === "rock" && cpu === cpuOptions.scissors) ||
		(player === "scissors" && cpu === cpuOptions.paper) ||
		(player === "paper" && cpu === cpuOptions.rock)
	) {
		User.roundWinner(playerDefaultName.textContent);
		playerScoreText.textContent = ++User.score;
	} else if (
		(player === "scissors" && cpu === cpuOptions.rock) ||
		(player === "paper" && cpu === cpuOptions.scissors) ||
		(player === "rock" && cpu === cpuOptions.paper)
	) {
		Cpu.roundWinner("CPU");
		cpuScoreText.textContent = ++Cpu.score;
	} else {
			Cpu.roundWinner(null);
			drawCounter++
			drawScoreText.textContent = drawCounter;
	}
}


//EVENT LISTENERS HERE EVERYTHING STARTS

/*add player name*/
submitButton.addEventListener("click", addPlayerName);

/* when i click a hand, animation and game starts, GO TO ANIMATIONS FILE => */
playerOptions.forEach((option) =>
	option.addEventListener("click", handsInitialAnimation)
);
