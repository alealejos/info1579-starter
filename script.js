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

let Myname = "Alexandra";
let totalModules = 10;
let isEnrolled = true;

// TODO: Use a template literal to output a welcome message. Use at least one ${}.

let welcomeMessage = `Welcome, ${Myname}!`;
console.log(welcomeMessage);

// TODO: Calculate the total study hours for the course. There are 10 modules. Each module takes roughly 6 hours.
// Formula: totalStudyHours = totalModules * hoursPerWeek

let hoursPerWeek = 6;
let totalStudyHours = totalModules * hoursPerWeek
console.log(totalStudyHours);

// TODO: Calculate the number of study hours each day. Convert the output to minutes (this formula is not provided).
// Formula: dailyStudyHours = hoursPerWeek / 7

let dailyStudyHours = (hoursPerWeek / 7);
console.log(dailyStudyHours);

let dailyStudyMinutes = dailyStudyHours * 60;
console.log(dailyStudyMinutes);

// TODO: Give yourself a rest day and exclude one day out of your week. Calculate the new number of hours and set it to adjustedDailyHours. Convert the output to minutes (this formula is not provided).

let adjustedDailyStudyHours = (hoursPerWeek / 6);
console.log(adjustedDailyStudyHours);

let adjustedDailyStudyMinutes = adjustedDailyStudyHours * 60;
console.log(adjustedDailyStudyMinutes)

// TODO: Calculate the course percent complete and the course percent remaining. Imagine you've completed 2 modules (Start Here and Module 1).
// Formula: percent = (part / whole) * 100


const percentComplete = calculatePercentComplete(completedModules.length, courseModules.length)
const percentRemaining = 100 - percentComplete;

const courseModules = ["Module 1","Module 2","Module 3","Module 4","Module 5","Module 6","Module 7","Module 8","Module 9",
  "Module 10"];

//Part1
const completedModules = ["Module 1","Module 2", "Module 3"];

functioncalculatePercentComplete(completedModules,total){
  return (completed/total)*100;
}

let courseProgress;

if (percentRemaining == 0) {
  courseProgress = "Current Progress: Finished!";
} 

else if (percentRemaining >= 1 && percentRemaining <= 24.99) {
  courseProgress = "Current Progress: Almost Finished!";
} 

else if (percentRemaining >= 25 && percentRemaining <= 74.99) {
  courseProgress = "Current Progress: Making Progress";
} 

else if (percentRemaining >= 75 && percentRemaining <= 100) {
  courseProgress = "Current Progress: Just Getting Started";
}

else {courseProgress = "Invalid entry.";}

display("courseProgress", courseProgress);


let courseGrade;

if (percentRemaining >= 90 && percentRemaining <= 100) {
    courseGrade = "A";
} 

else if (percentRemaining >= 80 && percentRemaining <=89.99) {
    courseGrade = "B";
} 

else if (percentRemaining >= 70 && percentRemaining <=79.99) {
    courseGrade = "C";
} 

else if (percentRemaining >= 60 && percentRemaining <=69.99) {
    courseGrade = "D";
} 

else if (percentRemaining >= 0 && percentRemaining <=59.99) {
    courseGrade = "F";
} 

else {courseGrade = "Invalid entry.";
}

display("Course Grade: ", courseGrade);

let studyDay;
let studyPlan;

if (percentComplete===100){
  studyDay='Complete';
}
else {
  studyDay = prompt('Enter a study day: ');
}
  
switch (studyDay){
  case "Monday": studyPlan = 'Study for 55 minutes';
  break;
  case "Tuesday": studyPlan ='Take the day off';
  break;
  case 'Wednesday': studyPlan = 'Lab day for 30 minutes';
  break;
  case 'Thursday': studyPlan ='Applied programming activity day for 40 minutes';
  break;
  case 'Friday': studyPlan = 'Study for 20 minutes';
  break;
  case 'Saturday': studyPlan = 'Study for 40 minutes';
  break;
  case 'Sunday': studyPlan ='Quiz';
  break;
  case "Complete":
  studyPlan = "Course Completed!";
  break;
  default:studyPlan = "Invalid day";
  break;
}
display("Study Day: ", studyDay);
display("Study Plan: ", studyPlan);

// DISPLAY RESULTS

// TODO: Display your results. Use the correct variables and avoid hard-coding the data below.


// TODO: Adjust all decimals to two places.
display("Welcome Message",welcomeMessage);
display("My Name", Myname);
display("Enrolled",isEnrolled);
display("Total Modules", totalModules);
display("Daily Study Hours (7 days)", dailyStudyHours.toFixed(2));
display("Daily Study Minutes (7 days)", dailyStudyMinutes.toFixed(2));
display("Daily Study Hours (with rest day)", adjustedDailyStudyHours.toFixed(2));
display("Daily Study Minutes (with rest day)", adjustedDailyStudyMinutes.toFixed(2));

// TODO: Display your results with a % sign
display("Percent Complete", percentCompleted + "%");
display("Percent Remaining", percentRemaining + "%");


