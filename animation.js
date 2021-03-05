//selectors
const playerHand = document.querySelector(".player_selected-hand");
const cpuHand = document.querySelector(".cpu_selected-hand");

//3      RESET THE HANDS CHANGE TO USE IT AGAIN
function resetHandChange() {
	playerHand.src = "./assets/player-rock.png";
	playerHand.style.animation = "none";
	cpuHand.src = "./assets/cpu-rock.png";
	cpuHand.style.animation = "none";
}
//2      CHANGE THE CENTRAL HANDS IMG

	/*CPU central hand changer
    the game begining  will call this function with the values that i need*/

function cpuHandChange(cpuSelection) {
	if (cpuSelection == 1) {
		cpuHand.src = "./assets/CPU-paper.png";
	} else if (cpuSelection == 2) {
		cpuHand.src = "./assets/CPU-scissors.png";
	}
}

/*player hand changer*/
function playerHandChange(element) {
	playerHand.src = element.target.src;

	gameBeginning(element);
	setTimeout(() => resetHandChange(element), 800);
}

//1)     INITIAL ANIMATION  OF HANDS
const handsInitialAnimation = (element) => {
	playerHand.style.animation = "hands_animation 1s ease";
	cpuHand.style.animation = "hands_animation 1s ease";

	setTimeout(() => playerHandChange(element), 800);
};
