/*

John and a friend invented a simple game where the player with the
highest value of his height (in cm) plus five time his age wins

1. create Variables for the hieghts and ages of the two friends and assign
them some values

2. Calculate their scores
3. Decide who wins and print the winner to the console. Include score
in the string that you output to the console. Don't forget that there can be
a draw (both player with the same score)

4 EXTRA: Add a third player and now decide who wins. Hint: you will need
the && operator to take the decision. If you can't solve this one, just watch the
solution

*/

var markHieght = 76;
var markAge = 20;
var johnHeight = 75;
var johnAge = 20;
var jakeHieght = 100;
var jakeAge = 20;
var jakeScore = jakeHieght + jakeAge * 5;
var markScore = markHieght + markAge * 5;
var johnScore = johnHeight + johnAge * 5;

console.log(jakeScore);
console.log(johnScore);
console.log(markScore);
console.log(johnScore > jakeScore)
console.log(johnScore > markScore && johnScore > jakeScore);


	if (johnScore > markScore && johnScore > jakeScore){
		console.log('John Score is '+johnScore+' So john wins!');
}
	else if (markScore > johnScore && markScore > jakeScore) {
		console.log('Mark Score is '+markScore+' So Mark wins!');
}
	else if (jakeScore > johnScore && jakeScore > markScore){
		console.log('Jake Score is '+jakeScore+' So Jake wins!');
}
	else
	console.log('it\'s a draw!');
