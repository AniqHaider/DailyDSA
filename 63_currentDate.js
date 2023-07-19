// Javascript Program to Display Current Date

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Month starts from 0
var year = currentDate.getFullYear();

var formattedDate = day + "/" + month + "/" + year;

console.log("Current Date: " + formattedDate);
