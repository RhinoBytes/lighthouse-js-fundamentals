/*

for (let x = 100;  x <= 200;  x++) {
  if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (x % 3 === 0) {
    console.log("Loopy");
  } else if (x % 4 === 0) {
    console.log("LightHouse");
  }  else {console.log(x);
  }
}

*/

/*
let data = [1,2,3,4];
let name = "pedro";
for (let val of name) {
  console.log(val);
}

*/
/*
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(length) {  // function buildTriangle based on input length 
  let triangle = ""; // triangle is our final variable
  let lineNumber = 1; // represents current line number
  for (lineNumber = 1; lineNumber <= length; lineNumber++) {  // adds one to line number and repeats until it is less then or equal to length
      triangle = triangle + makeLine(lineNumber);  //redefines triangle as triagnle + makeLine function with lineNumber input
  }
  return triangle  //  returns triangle after function and for loop have completed
}

console.log(buildTriangle(5));  ///prints final triangle shape
*/

/*
const chooseStations = function(stations) {
  let result = [];
  for (let s of stations)
    if (s[1] >= 20 && (s[2] === 'school' || s[2] === 'community centre'))
      result.push(s[0]);
  return result;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);
console.log(chooseStations(stations))

*/
/*
const finalPosition = function(moves) {
  let x = 0;
  let y = 0;
  for (let move of moves){
  switch (move) {
    case 'north':
      y++;
      break;
    case 'south':
      y--;
      break;
    case 'west':
      x--;
      break;
    case 'east':
      x++;
      break;
  }
}
  
  return [x, y];
}

*/
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

// console.log(finalPosition(moves))


/*
const endLocation = function(moves) {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    switch(move) {
        case 'north':
          y++;
          break;
        case 'south':
          y--;
          break;
        case 'west':
          x--;
          break;
        case 'east':
          x++;
          break;
    }
    return [x, y]
  }
  
}

console.log(endLocation(moves))

*/

/*

let ageCalculator = function(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return (name + " is " + age + " years old.");
} 

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

*/
/*

let howManyHundreds = function(num) {
  let x = num % 100;
  let y = num - x;
  return y / 100;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

*/
/*
function calculateRectangleArea(length, width) {
  let x = length * width;
  if (length > 0 && width > 0){
    return x;
  }
}

function calculateTriangleArea(base, height) {
  let y = base * height / 2;
  if (base > 0 && height > 0){
  return y;
  }
}

function calculateCircleArea(radius) {
  let k = Math.PI * radius * radius;
  if (radius > 0) {
    return k; 
  }
  

}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

*/

/*
var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts[0]); // returns glazed

donuts.splice(1, 2 , "chocolate frosted", "maple");




console.log(donuts);

*/
/*
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
team.length = 10;
console.log(team)
function hasEnoughPlayers(arrayLength) {
    if (arrayLength.length >= 7) 
        return true;
     else 
        return false;
    
}



console.log(hasEnoughPlayers(team));

*/

// The following is an example of a forEach looping method

/*
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
*/
/*
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " Hole";
  donut = donut.toUpperCase();
  console.log(donut);
})


words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

*/

/*
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(word, num) {
  if (word % 3 === 0) {test[num] = test[num] + 100;
      
  }  
})


console.log(test)

*/

