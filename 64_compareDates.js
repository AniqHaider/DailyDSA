const compareDates = (date1, date2) => {

  const d1 = new Date(date1);
  const d2 = new Date(date2);

  if (d1.getTime() > d2.getTime()) {
    return 1; // date1 is greater than date2
  } else if (d1.getTime() < d2.getTime()) {
    return -1; // date1 is less than date2
  } else {
    return 0; // both dates are equal
  }
};

const date1 = "2023-04-18";
const date2 = "2023-04-20";

const comparisonResult = compareDates(date1, date2);
if (comparisonResult === 1) {
  console.log("Date 1 is greater than Date 2");
} else if (comparisonResult === -1) {
  console.log("Date 1 is less than Date 2");
} else {
  console.log("Date 1 is equal to Date 2");
}
