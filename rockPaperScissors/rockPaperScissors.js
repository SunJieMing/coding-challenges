/*
 * * Write a function that generates every sequence of throws a single
 * * player could throw over a three-round game of rock-paper-scissors.
 * *
 * * Your output should look something like:
 * *   [["rock", "rock", "rock"],
 * *    ["rock", "rock", "paper"],
 * *    ["rock", "rock", "scissor"],
 * *    ["rock", "paper", "rock"],
 *              ...etc...
 *                   */

const rockPaperScissors = () => {
	// TODO: your solution here
	let box = [];
	const rps = ['rock', 'paper', 'scissor'];
	for (var i = rps.length - 1; i >= 0; i--) {
		for (var j = rps.length - 1; j >= 0; j--) {
			for (var k = rps.length - 1; k >= 0; k--) {
				box.push([rps[i], rps[j], rps[k]]);
              
			}
		}
	}
	return box;
};
