// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/
/// Test Data 1
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
///// Test Data 2
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;
// const markHigherBMI = markBMI > johnBMI
// console.log(markBMI, johnBMI, markHigherBMI);

/*
// Coding Challenge 2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉
*/

/// Test Data 1
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;
///// Test Data 2
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;
// console.log(markBMI, johnBMI)
// if(markBMI > johnBMI){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }


////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas)

// if(scoreDolphins > scoreKoalas){
//     console.log('Team Dolphins win the Trophy 🏆');
// } else if(scoreKoalas > scoreDolphins){
//     console.log('Team Koalas win the Trophy 🏆');
// } else if(scoreDolphins === scoreKoalas){
//     console.log('Both team win the Trophy 🏆');
// } else {
//     console.log('No one wins the Trophy!');
// }

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// // answer bonus 1
// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log('Team Dolphins win the Trophy 🏆');
// } else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log('Team Koalas win the Trophy 🏆');
// } else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
//     console.log('Both team win the Trophy 🏆');
// } else {
//     console.log('No one wins the Trophy!');
// }

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

// const billTip = 275;
// // const billTip = 40;
// // const billTip = 430;
// const tip = billTip >= 50 && billTip <= 300 ? billTip * 0.15 : billTip * 0.2;
// console.log(`The bill was ${billTip}, the tip was ${tip}, and the total value ${billTip + tip}`);



//////////// Part 2
///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// //// Data 1
// let avgDolhins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);
// console.log(avgDolhins, avgKoalas);

// const checkWinner = function(avgDolhins, avgKoalas){
//     if(avgDolhins >= 2 * avgKoalas){
//         console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`);
//     } else if(avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
//     } else {
//         console.log(`No teams win...`);
//     }
// }
// checkWinner(avgDolhins, avgKoalas);
// //// Data 2
// avgDolhins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// console.log(avgDolhins, avgKoalas);
// checkWinner(avgDolhins, avgKoalas);



///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44
 */

// const calcTip = function(x){
//     return x >= 50 && x <= 300 ? x * 0.15 : x * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);