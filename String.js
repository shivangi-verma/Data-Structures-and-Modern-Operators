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
    let tick = "";
    while (index >= 0) {
      index--;
      tick += "✅";
    }
    console.log(value.padEnd(20, " "), tick);
  }
}

/* 

underscore_case 
first_name
Some_Variable
  calculate_AGE
delayed_departure

*/
