//TODO: Include your multi-line comment header
/*
    Name: Alexandra
    Date: 09-21-2026
    Assignment: Module 01 Applied Programming Activity
    Quarter: Fall
    Instructor: Tania Kuisma
*/

// TODO: Import "use strict" directive
"use strict";

// DO NOT MODIFY
const display = (label, value) =>
  (document.getElementById("output").innerHTML += `${label}: ${value}<br>`);
// END DO NOT MODIFY

// ADD YOUR CODE BELOW

// TODO: Create variables for your name (string), total number of modules for our class (number), and if you're enrolled (boolean)
name;
totalModules;
isEnrolled;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100

// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.

let Myname = "Alexandra";
let totalModules = 10;
let isEnrolled = true;

let welcomeMessage = `Welcome, ${Myname}!`;

let hoursPerWeek = 6;
let totalStudyHours = totalModules * hoursPerWeek
console.log(totalStudyHours);

let dailyStudyHours = (hoursPerWeek / 7);
console.log(dailyStudyHours);

let dailyStudyMinutes = dailyStudyHours * 60;
console.log(dailyStudyMinutes);

let adjustedDailyStudyHours = (hoursPerWeek / 6);
console.log(adjustedDailyStudyHours);

let adjustedDailyStudyMinutes = adjustedDailyStudyHours * 60;
console.log(adjustedDailyStudyMinutes)

let part = 2;
let whole = 10;

let percent = (part / whole) * 100;
let percentRemaining = 100 - percent;

console.log(percent);
console.log(percentRemaining);





// TODO: Adjust all decimals to two places.
display("Welcome Message");
display("My Name");
display("Enrolled");
display("Total Modules");
display("Daily Study Hours (7 days)");
display("Daily Study Minutes (7 days)");
display("Daily Study Hours (with rest day)");
display("Daily Study Minutes (with rest day)");

// TODO: Display your results with a % sign
display("Percent Complete");
display("Percent Remaining");

console.log(welcomeMessage);
console.log(Myname);
console.log(isEnrolled);
console.log(totalModules);
console.log(dailyStudyHours.toFixed(2));
console.log(dailyStudyMinutes.toFixed(2));
console.log(adjustedDailyStudyHours.toFixed(2));
console.log(adjustedDailyStudyMinutes.toFixed(2));
console.log(percent + "%");
console.log(percentRemaining + "%");