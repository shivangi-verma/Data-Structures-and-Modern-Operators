// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
/* 

underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

*/

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀

// function convertText() {
//   const text = document.getElementById("textArea").value;
//   console.log(text);
//   const words = text.split("\n");
//   // const textLowered = ;
//   // split it into an array of words
//   // const words = text.toLowerCase().split("\n");
//   console.log(words);
//   let trimmedWords = [];
//   for (i of words) {
//     trimmedWords.push(i.trim().toLowerCase());
//   }
//   console.log(trimmedWords);

//   // except the first value convert the rest of the words first letter to uppercase and add to form a string
//   let final = [];
//   for (i of trimmedWords) {
//     final.push(i.split("_"));
//     // final += i.replace(i[0], i[0].toUpperCase());
//     console.log(i);
//   }
//   // restart the loop in \n encountered
//   console.log(final);
// }

// let value = "";
// let littleArr = [];
// let secondWord = "";
// for (i of trimmedWords) {
//   littleArr = i.split("_");
// secondWord = littleArr[1].replace(
// littleArr[1][0],
// littleArr[1][0].toUpperCase()
// );

// console.log(littleArr);
// value = littleArr[0] + secondWord;
// console.log(value);

function convertText() {
  const text = document.getElementById("textArea").value.toLowerCase();
  const words = text.split("\n");
  console.log(words);

  let trimmedWords = [];
  for (i of words) {
    trimmedWords.push(i.trim());
  }
  console.log(trimmedWords); 

  
  for ([index, val] of trimmedWords.entries()) {
    let value = val.replace(
      /_[a-zA-Z]/g,
      val[val.indexOf("_") + 1].toUpperCase()
    );
    console.log(value);
  }
}

/* 

underscore_case 
first_name
Some_Variable
  calculate_AGE
delayed_departure

*/
