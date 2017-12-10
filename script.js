// Lecture: Variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age)

var fullAge = true;
console.log(fullAge);
*/

/*
// Lecture: Variables 2
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);
job = "teacher"
isMarried = false;

console.log(name + ' is a ' + age + ' year old '  + job + '. Is he married? ' + isMarried +'.')

age = 'Thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old '  + job + '. Is he married? ' + isMarried +'.')

//var lastName = prompt('what is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' year old '  + job + '. Is he married? ' + isMarried +'.')
*/

// Lecture: Operators
/*
var now = 2016;
var birthYear = now - 26;
birthYear = now - 26 * 2;


console.log(birthYear);


var ageJohn = 34;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26
console.log(ageJohn);
console.log(ageMark);
ageJohn++;
// means ageJohn = ageJohn + 1
ageMark *= 2;
// means ageMark = ageMark * 2
console.log(ageJohn);
console.log(ageMark);
*/

/////////////////////////////////////////////////////
// lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMaried = 'yes';

if (isMaried === 'yes') {
	console.log( name+' is Married');
} else {
	console.log(name+' will be married soon');
}

isMaried = true;

if (isMaried){
	console.log('YES');
} else {
	console.log('NO');
}

if (isMaried){
	console.log('YES');
}

if (23 === '23') {
	console.log('Something');
}
*/
// type coercion if == and not type coercion if ===
// in order to avoid bugs we always use === 

//////////////////////////////////////////////////

// Lecture: boolean logic and switch
/*
var age = 20;

if(age < 20){
	console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
	console.log('John is a young man');
} else {
	console.log('John is an old man');
}

var job = prompt('what does john do');


switch (job) {
	case "teacher":
		console.log("john teaches kid");
		break;
	case "driver":
		console.log("john drives a cab in lisbon");
		break;
	case "cop":
		console.log("John fights crime");
		break;
	default:
		console.log("john does something else");
}
*/

////////////////////////////////////////////////////
// CODING CHALLANGE 1

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
the && opertor to take the decision. If you can't solve this one, just watch the
solution

*/

var markHieght = 75;
var markAge = 20;
var johnHeight = 76;
var johnAge = 20;
var markScore = markHieght + markAge * 2;
var johnScore = johnHeight + johnAge * 2;

console.log(johnScore);
console.log(markScore);

switch (johnScore === markScore) {
	case johnScore < markScore:
	console.log('John Score is '+johnScore+ ' cm'+' greater than '+markScore+' cm'+' So john wins!');
	break;
	case johnScore > markScore:
	console.log('John Score is '+johnScore+ ' cm'+' less than '+markScore+' cm'+' So Mark wins!');
	break;
	default:
	console.log('John Score is '+johnScore+ ' cm'+' equals to '+markScore+' cm'+' So its a draw!');
	break;
}































































































































