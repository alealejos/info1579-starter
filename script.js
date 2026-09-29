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

let part = 2;
let whole = 10;

let percent = (part / whole) * 100;
let percentRemaining = 100 - percent;

console.log(percent);
console.log(percentRemaining);

const courseModules = ["Module 1","Module 2","Module 3","Module 4","Module 5","Module 6","Module 7","Module 8","Module 9",
  "Module 10"];

const completedModules = ["Module 1","Module 2"];

completedModules = prompt("Enter the number of completed modules (1-10): ");
percentRemaining = 100 - (completedModules / 10) * 100;

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

display(courseProgress);

if (percentCompleted >= 90 && percentCompleted <= 100) {
    courseGrade = "A";
} 

else if (percentCompleted >= 80 && percentCompleted <=89.99) {
    courseGrade = "B";
} 

else if (percentCompleted >= 70 && percentCompleted <=79.99) {
    courseGrade = "C";
} 

else if (percentCompleted >= 60 && percentCompleted <=69.99) {
    courseGrade = "D";
} 

else if (percentCompleted >= 0 && percentCompleted <=59.99) {
    courseGrade = "F";
} 

else {courseGrade = "Invalid entry.";
}

display("Course Grade: " & courseGrade);

let studyDay;
let studyPlan;

if (courseProgress===100){
  studyDay='Complete';
}
else {
  promp('Enter a study day: ');
}
  
switch (studyDay){
  case "Monday": console.log ('Study for 55 minutes');
  break;
  case "Tuesday": console.log ('Take the day off');
  break;
  case 'Wednesday': console.log ('Lab day for 30 minutes');
  break;
  case 'Thursday': console.log('Applied programming activity day for 40 minutes');
  break;
  case 'Friday': console.log ('Study for 20 minutes');
  break;
  case 'Saturday': console.log ('Study for 40 minutes');
  break;
  case 'Sunday':console.log ('Quiz')
  break;
  case "Complete":
  studyPlan = "Course Completed!";
  break;
  default:studyPlan = "Invalid day";
  break;
}
display("Study Day: " + studyDay);
display("Study Plan: " + studyPlan);

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
display("Percent Complete", percent + "%");
display("Percent Remaining", percentRemaining + "%");


console.log(Myname);
console.log(isEnrolled);
console.log(totalModules);
console.log(dailyStudyHours.toFixed(2));
console.log(dailyStudyMinutes.toFixed(2));
console.log(adjustedDailyStudyHours.toFixed(2));
console.log(adjustedDailyStudyMinutes.toFixed(2));
console.log(percent + "%");
console.log(percentRemaining + "%");