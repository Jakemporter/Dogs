function displayAge() {
  var dob = moment("13-01-2021", "DD-MM-YYYY");
  var today = moment();
  var monthDiff = today.diff(dob, "months");
  var yearDiff = today.diff(dob, "years");
  var i = 0;
  var months = 0;
  while (i < yearDiff) {
    months += 12;
    i++;
  }
  $("#age").append(` ${yearDiff} Years and ${monthDiff - months} months old`);
}
displayAge();
