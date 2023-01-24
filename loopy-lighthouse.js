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

function movies(messageFunction, name) {
  messageFunction(name);
}
