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
/*
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
*/

///////////////////////////////////////////////
// Lecture: Functions
/*
function calAge(yearofbirth) {
		var age = 2017 - yearofbirth;
		return age;
}

var johnAge = calAge(1990);


function yearsUntilRetirement(name, year) {
		var age = calAge(year);
		var retirement = 65 - age;
		if (retirement >= 0) {
					console.log(name +' retires in '+retirement+' years ');
	} else {
					console.log(name +' has already retired');
	}

}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1976);
yearsUntilRetirement('Aslam', 1950);
yearsUntilRetirement('Zakir', 1965);
*/

// Functions that supposed to tell us if person is allowed on a roller coaster
/*

function CalculateAge(yearofbirth) {
			var age = 2017 - yearofbirth;
			return age;
}

function Permissible(name, height, yearofbirth) {
			var age = CalculateAge(yearofbirth);
			if  (height >= 150 && age > 15) {
					console.log(name+" is Permissible");
			} else {
					console.log(name+" Not Permissible");
			}
}



Permissible('Hasan', 150, 1992)
Permissible('Zain', 150, 2005)
Permissible('Taha', 150, 1992)
*/
////////////////////////////////////////////
// Lecture: Statements and Expressions
/*
function someFunc(par) {
	// code
}
// This is a statement
//////////////

var someFun = function(par) {
	// code
}

// This is Expression
///////////////////////////////
*/

////////////////////////////////////////////////
// Lecture: Array

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);
names[1] = 'Ben';
console.log(names[1]);
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr. ')
john.pop();
john.shift();
john.indexOf('Smith');
console.log(john);

if (john.indexOf('teacher') === -1){
	console.log('John is not a teacher');
} else {
	console.log('John is a teacher');
}
