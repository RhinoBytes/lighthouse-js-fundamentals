/*
const raining = true;
const cold = true; 
const temperature = -5;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15 ) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now your ready to go outside!");

if (raining) {
  console.log("Dont forget your umbrella!");
} else {
  console.log("Short sleeves are fine.");
}

if (cold) {
  console.log("Make sure you pick you a scarf!");
} else {

}

console.log("Now your ready to go outside!");



const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligable to vote.")
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...")
}

if (!raining) {
  console.log("Leave your umbrella at home!")
}



const whichSchool  = function (age) {
  if (age <= 13) {
    return "Elementary School";
  } else if (age <= 18 && age >= 13) {
    return "High School";
  } else {
    return "Lighthouse Labs";
  }
}
*/

/*
var start = 0; //when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start +2; // how to get to the next item
}
*/

/*

var x = 1;


while (x <= 20) {

  console.log(start);
  start = start + 1;
}
*/

for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}