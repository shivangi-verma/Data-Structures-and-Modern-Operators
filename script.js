"use strict";

// // Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// const italianFoods = new Set([
//   "pasta",
//   "gnocchi",
//   "tomatoes",
//   "olive oil",
//   "garlic",
//   "basil",
// ]);

// const mexicanFoods = new Set([
//   "tortillas",
//   "beans",
//   "rice",
//   "tomatoes",
//   "avocado",
//   "garlic",
// ]);

// // Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// // console.log(x, y);

// let { openingHour } = restaurant;
// console.log(openingHours);

// const { day: openingHours.fri } = restaurant;
// // console.log(fri);

// const user = {
//   id: 42,
//   name: "Ria",
//   roles: ["admin", "editor"],
//   contact: { email: "ria@example.com" },
// };

// function summarizeUser(user) {
//   const {
//     id: userId,
//     name: userName = "unknown",
//     roles: [primaryRole = "guest"] = [],
//     contact: { email: email = "no-email", phone = "NA" } = {},
//   } = user;

//   return { userId, userName, primaryRole, email, phone };
// }

// console.log(summarizeUser(user));

// function mergeUsers( arr1, arr2) {
// const newArr1 = new Map(arr1.map(user => [user.id, user ] ) ) ;
// arr2.forEach ()
// }

// const myArr = [1, 2, 3];
// function squareRetruner(x) {
//   //   console.log(arr);

//   return x * x;
// }
// let squareArr = myArr.map(squareRetruner);
// console.log(squareArr);

// Write a function addToEnd(arr, ...items) that returns a new array with the items added at the end of arr.
// (Use spread operator, no .push()!)
// function addToEnd(arr, ...items) {
//   return [...arr, ...items];
// }
// console.log(addToEnd([1, 2], 3, 4));
// addToEnd([1, 2], 3, 4); // [1, 2, 3, 4]
// console.log(addToEnd([1, 2, 3, 4, 5], 1, 2, 3));

// Write a function updateUser(user, updates) that returns a new object with properties from user overwritten by updates.

// function updateUser(user, updates) {
//   return { ...user, ...updates };
// }
// console.log(updateUser({ name: "Alice", age: 20 }, { age: 21 }));

// { name: "Alice", age: 21 }

// Challenge 3: Merge Arrays of Objects

// Write a function combineUsers(arr1, arr2) that just combines both arrays (no deduplication yet).

// Example:
// function combineUsers(arr1, arr2) {
//   return [...arr1, ...arr2];
// }
// console.log(combineUsers([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }]));

// [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }]

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,

    // team1: 7.33,
    // x: 3.25,
    // team2: 1.5,
  },
};

let players1 = [...game.players[0]];
let players2 = [...game.players[1]];

let gk1 = game.players[0][0];
let gk2 = game.players[1][0];

let [, ...fieldPlayers1] = game.players[0];
let [, ...fieldPlayers2] = game.players[1];

let allPlayers = [...game.players[0], ...game.players[1]];

let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

let {
  odds: { team1, x: draw, team2 },
} = game;

// Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
function printGoals(...playerNames) {
  for (let players of playerNames) {
    console.log(players);
  }
  console.log("Total Goals : ", playerNames.length);
}

console.log(players1);
console.log(players2);
console.log("GoalKeeper1 : " + gk1);
console.log("GoalKeeper2 : " + gk1);
console.log(fieldPlayers1);
console.log(fieldPlayers2);
console.log(allPlayers);
console.log(players1Final);
console.log(team1, draw, team2);
printGoals("p0", "p1", "p2", "p3", "p4");

//  odds: {
// team1: 1.33,
// x: 3.25,
// team2: 6.5,

// team1: 7.33,
// x: 3.25,
// team2: 1.5,
// },

// The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// (a && b) returns a : if a is falsy
// (a && b) returns b : if a is truthy
// team1 < draw = less odds for team 1 = team 1 wins
// team2 < draw = less odds for team 2  = team 1 wins

// let team1Wins = team1 < draw && "Team1";
// let team2Wins = team2 < draw && "Team2";

let teamLikelyToWin = (team1 < team2 && "Team1") || (team2 < team1 && "Team2");
// let teamLikelyToWin = team1Wins || team2Wins;
console.log("The team more likely to win : " + teamLikelyToWin);

// If you want the UI visible right away:
openAppConsole();
