/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

var laugh = function (num) {
  var result = "";
  for (var i = 0; i < num; i++) {
    result += "ha";
  }
  return result + "!";
};

console.log(laugh(3));
