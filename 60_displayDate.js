// js program to display date and time

const displayDateAndTime = () => {
  var currentDate = new Date();
  var date = currentDate.toDateString();
  var time = currentDate.toLocaleTimeString();
  console.log("Current date: " + date);
  console.log("Current time: " + time);
};

displayDateAndTime();
