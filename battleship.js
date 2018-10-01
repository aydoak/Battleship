// let rl = require('readline-sync');

// console.log("i'm linked")


let incrementor = 0;
let compIncrementor = 0;


//declare board space values

let cArr = [false, false, false, false, false, false, false, false, false];
let pArr = [{value: false, 
					attacked: false},
						{value: false, 
					attacked: false}, 
						{value: false, 
					attacked: false}, 
						{value: false, 
					attacked: false}, 
						{value: false, 
					attacked: false}, 
						{value: false, 
					attacked: false}, 
						{value: false, 
					attacked: false}, 
						{value: false, 
					attacked: false},
						{value: false, 
					attacked: false}];


//start game

function startGame() {
	location.reload();
	document.getElementById("demo").innerHTML = "Click on your boxes to set up your board. Refresh window to play again.";
	// setUpShips();
}
   
//set computer ship positions

		function cShipPos() {
		var arr =[];
		while(arr.length < 3){
    var randomnumber = Math.floor(Math.random()*9);
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
    	arr.forEach(function(num){
    		cArr[num] = true
    	})
		}}
		
		cShipPos();
		console.log(cArr);

//set player ship positions

// function setUpShips() {

// 	let incrementor = 0;

			function set_pa1() {
				if (pArr[0].value === false && incrementor < 3) {
			let x = document.getElementById("pa1");
			x.className = "set";			
			pArr[0].value = true;
      // console.log(pArr[0]);
      incrementor ++;
      // console.log(incrementor);
      if (incrementor === 3) {
		playGame();}
			}}

			function set_pa2() {
				if (pArr[1].value === false && incrementor < 3) {
			let x = document.getElementById("pa2");
			x.className = "set";			
			pArr[1].value = true;
      // console.log(pArr[1]);
      incrementor ++;
      // console.log(incrementor);
      if (incrementor === 3) {
		playGame();}
			}}

			function set_pa3() {
				if (pArr[2].value === false && incrementor < 3) {
			let x = document.getElementById("pa3");
			x.className = "set";			
			pArr[2].value = true;
      // console.log(pArr[2]);
      incrementor ++;
      // console.log(incrementor);
      if (incrementor === 3) {
		playGame();}
			}}

			function set_pa4() {
				if (pArr[3].value === false && incrementor < 3) {
			let x = document.getElementById("pa4");
			x.className = "set";			
			pArr[3].value = true;
      // console.log(pArr[3]);
      incrementor ++;
      // console.log(incrementor);
      if (incrementor === 3) {
		playGame();}
			}}

			function set_pa5() {
				if (pArr[4].value === false && incrementor < 3) {
			let x = document.getElementById("pa5");
			x.className = "set";			
			pArr[4].value = true;
      // console.log(pArr[4]);
      incrementor ++;
      // console.log(incrementor);
      if (incrementor === 3) {
		playGame();}
			}}

			function set_pa6() {
				if (pArr[5].value === false && incrementor < 3) {
			let x = document.getElementById("pa6");
			x.className = "set";			
			pArr[5].value = true;
      // console.log(pArr[5]);
      incrementor ++;
      // console.log(incrementor);
      if (incrementor === 3) {
		playGame();}
			}}

			function set_pa7() {
				if (pArr[6].value === false && incrementor < 3) {
			let x = document.getElementById("pa7");
			x.className = "set";			
			pArr[6].value = true;
      // console.log(pArr[6]);
      incrementor ++;
      // console.log(incrementor);;
      if (incrementor === 3) {
		playGame();}
			}}

			function set_pa8() {
				if (pArr[7].value === false && incrementor < 3) {
			let x = document.getElementById("pa8");
			x.className = "set";			
			pArr[7].value = true;
      // console.log(pArr[7]);
      incrementor ++;
      // console.log(incrementor);
      if (incrementor === 3) {
		playGame();}
			}}

			function set_pa9() {
				if (pArr[8].value === false && incrementor < 3) {
			let x = document.getElementById("pa9");
			x.className = "set";			
			pArr[8].value = true;
      // console.log(pArr[8]);
      incrementor ++;
      // console.log(incrementor);
      // if (incrementor < 3) {
		// setUpShips();
		// 	}}}
		if (incrementor === 3) {
		playGame();}
}}

	// if (incrementor < 3) {
	// 	setUpShips();
	// if (incrementor === 3) {
	// 	playGame();}


//play game
	 
// function start() {
// if (incrementor < 3) {
// 	setUpShips();
// } else if (incrementor === 3) {
// 	playGame();
// }}

			
// function playGame() {
			let c1 = 0;
			let c2 = 0;
			let c3 = 0;
			let c4 = 0;
			let c5 = 0;
			let c6 = 0;
			let c7 = 0;
			let c8 = 0;
			let c9 = 0;


			//player attacks

			function attack1() {
				if (incrementor >= 3 && cArr[0] === false && c1 < 1) {
			let x = document.getElementById("ca1");
			x.className = "miss";
			c1++;		
			evaluateWin();
			computerAttack();	
			} else if (incrementor >= 3 && cArr[0] === true && c1 < 1) {
			let x = document.getElementById("ca1");
			x.className = "hit";
			c1++;	
			cArr[0] = false;
			evaluateWin();
			computerAttack();		
			}}

			function attack2() {
				if (incrementor >= 3 && cArr[1] === false && c2 < 1) {
			let x = document.getElementById("ca2");
			x.className = "miss";
			c2++;	
			evaluateWin();
			computerAttack();
			} else if (incrementor >= 3 && cArr[1] === true && c2 < 1) {
			let x = document.getElementById("ca2");
			x.className = "hit";
			c2++;	
			cArr[1] = false;
			evaluateWin();
			computerAttack();		
			}}

			function attack3() {
				if (incrementor >= 3 && cArr[2] === false && c3 < 1) {
			let x = document.getElementById("ca3");
			x.className = "miss";
			c3++;
			evaluateWin();
			computerAttack();
			} else if (incrementor >= 3 && cArr[2] === true && c3 < 1) {
			let x = document.getElementById("ca3");
			x.className = "hit";
			c3++;	
			cArr[2] = false;
			evaluateWin();
			computerAttack();		
			}}

			function attack4() {
				if (incrementor >= 3 && cArr[3] === false && c4 < 1) {
			let x = document.getElementById("ca4");
			x.className = "miss";
			c4++;
			evaluateWin();
			computerAttack();
			} else if (incrementor >= 3 && cArr[3] === true && c4 < 1) {
			let x = document.getElementById("ca4");
			x.className = "hit";
			c4++;	
			cArr[3] = false;
			evaluateWin();
			computerAttack();		
			}}

			function attack5() {
				if (incrementor >= 3 && cArr[4] === false && c5 < 1) {
			let x = document.getElementById("ca5");
			x.className = "miss";
			c5++;
			evaluateWin();
			computerAttack();
			} else if (incrementor >= 3 && cArr[4] === true && c5 < 1) {
			let x = document.getElementById("ca5");
			x.className = "hit";
			c5++;	
			cArr[4] = false;
			evaluateWin();
			computerAttack();		
			}}

			function attack6() {
				if (incrementor >= 3 && cArr[5] === false && c6 < 1) {
			let x = document.getElementById("ca6");
			x.className = "miss";
			c6++;
			evaluateWin();
			computerAttack();
			} else if (incrementor >= 3 && cArr[5] === true && c6 < 1) {
			let x = document.getElementById("ca6");
			x.className = "hit";
			c6++;	
			cArr[5] = false;
			evaluateWin();
			computerAttack();		
			}}

			function attack7() {
				if (incrementor >= 3 && cArr[6] === false && c7 < 1) {
			let x = document.getElementById("ca7");
			x.className = "miss";
			c7++;
			evaluateWin();
			computerAttack();
			} else if (incrementor >= 3 && cArr[6] === true && c7 < 1) {
			let x = document.getElementById("ca7");
			x.className = "hit";
			c7++;		
			cArr[6] = false;
			evaluateWin();
			computerAttack();		
			}}

			function attack8() {
				if (incrementor >= 3 && cArr[7] === false && c8 < 1) {
			let x = document.getElementById("ca8");
			x.className = "miss";
			c8++;
			computerAttack();
			evaluateWin();
			} else if (incrementor >= 3 && cArr[7] === true && c8 < 1) {
			let x = document.getElementById("ca8");
			x.className = "hit";
			c8++;		
			cArr[7] = false;
			evaluateWin();
			computerAttack();		
			}}

			function attack9() {
				if (incrementor >= 3 && cArr[8] === false && c9 < 1) {
			let x = document.getElementById("ca9");
			x.className = "miss";
			c9++;
			evaluateWin();
			computerAttack();
			} else if (incrementor >= 3 && cArr[8] === true && c9 < 1) {
			let x = document.getElementById("ca9");
			x.className = "hit";
			c9++;
			cArr[8] = false;
			evaluateWin();
			computerAttack();		
			}}

		// else {
		// 	alert	{"Attack the computer!"};
		// }

			// let p1 = 0;
			// let p2 = 0;
			// let p3 = 0;
			// let p4 = 0;
			// let p5 = 0;
			// let p6 = 0;
			// let p7 = 0;
			// let p8 = 0;
			// let p9 = 0;


		//computer attacks

		function computerAttack() {
			var randomNumber = Math.floor(Math.random()*9);
			if (pArr[randomNumber].value === true) {
				if (randomNumber === 0) {
					let x = document.getElementById("pa1");
					x.className = "hit";
					pArr[0].value = false;
					pArr[0].attacked = true;
					evaluateWin();}
				else if (randomNumber === 1) {
					let x = document.getElementById("pa2");
					x.className = "hit";
					pArr[1].value = false;
					pArr[1].attacked = true;
					evaluateWin();}
				else if (randomNumber === 2) {
					let x = document.getElementById("pa3");
					x.className = "hit";
					pArr[2].value = false;
					pArr[2].attacked = true;
					evaluateWin();}
				else if (randomNumber === 3) {
					let x = document.getElementById("pa4");
					x.className = "hit";
					pArr[3].value = false;
					pArr[3].attacked = true;
					evaluateWin();}
				else if (randomNumber === 4) {
					let x = document.getElementById("pa5");
					x.className = "hit";
					pArr[4].value = false;
					pArr[4].attacked = true;
					evaluateWin();}
				else if (randomNumber === 5) {
					let x = document.getElementById("pa6");
					x.className = "hit";
					pArr[5].value = false;
					pArr[5].attacked = true;
					evaluateWin();}
				else if (randomNumber === 6) {
					let x = document.getElementById("pa7");
					x.className = "hit";
					pArr[6].value = false;
					pArr[6].attacked = true;
					evaluateWin();}
				else if (randomNumber === 7) {
					let x = document.getElementById("pa8");
					x.className = "hit";
					pArr[7].value = false;
					pArr[7].attacked = true;
					evaluateWin();}
				else if (randomNumber === 8) {
					let x = document.getElementById("pa9");
					x.className = "hit";
					pArr[8].value = false;
					pArr[8].attacked = true;
					evaluateWin();}
		} else if (pArr[randomNumber].value === false && pArr[randomNumber].attacked === false) {
				if (randomNumber === 0) {
					let x = document.getElementById("pa1");
					x.className = "miss";
					pArr[0].attacked = true;
					evaluateWin();}
				else if (randomNumber === 1) {
					let x = document.getElementById("pa2");
					x.className = "miss";
					pArr[1].attacked = true;
					evaluateWin();}
				else if (randomNumber === 2) {
					let x = document.getElementById("pa3");
					x.className = "miss";
					pArr[2].attacked = true;
					evaluateWin();}
				else if (randomNumber === 3) {
					let x = document.getElementById("pa4");
					x.className = "miss";
					pArr[3].attacked = true;
					evaluateWin();}
				else if (randomNumber === 4) {
					let x = document.getElementById("pa5");
					x.className = "miss";
					pArr[4].attacked = true;
					evaluateWin();}
				else if (randomNumber === 5) {
					let x = document.getElementById("pa6");
					x.className = "miss";
					pArr[5].attacked = true;
					evaluateWin();}
				else if (randomNumber === 6) {
					let x = document.getElementById("pa7");
					x.className = "miss";
					pArr[6].attacked = true;
					evaluateWin();}
				else if (randomNumber === 7) {
					let x = document.getElementById("pa8");
					x.className = "miss";
					pArr[7].attacked = true;
					evaluateWin();}
				else if (randomNumber === 8) {
					let x = document.getElementById("pa9");
					x.className = "miss";
					pArr[8].attacked = true;
					evaluateWin();}
		} else if (pArr[randomNumber].value === false && pArr[randomNumber].attacked === true) {
			computerAttack();
		}
	}

function evaluateWin() {
if (cArr[0] === false && cArr[1] === false && cArr[2] === false && cArr[3] === false && cArr[4] === false && cArr[5] === false && cArr[6] === false && cArr[7] === false && cArr[8] === false) {
	// document.getElementById("demo").innerHTML = "You win!";
	alert("You win!")
} else if (pArr[0].value === false && pArr[1].value === false && pArr[2].value === false && pArr[3].value === false && pArr[4].value === false && pArr[5].value === false && pArr[6].value === false && pArr[7].value === false && pArr[8].value === false){
	// document.getElementById("demo").innerHTML = "Computer wins!";
	alert("Computer wins!")
} }

function playGame() {
// console.log("Hi");
}


//declare winner

// if (ca1 === false && ca2 === false && ca3 === false && ca4 === false && ca5 === false && ca6 === false && ca7 === false && ca8 === false && ca9 === false) {
// 	console.log("You win!")
// } else if (pa1 === false && pa2 === false && pa3 === false && pa4 === false && pa5 === false && pa6 === false && pa7 === false && pa8 === false && pa9 === false){
// 	console.log("Computer wins!")
// };

//ask if play again?
// if("yes") {
// 	restart script
// } else {
// 	console.log("Thanks for playing!")
// }
console.log("This is the end of the game");