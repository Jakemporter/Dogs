var dogDob = moment("2021-01-13"); //Dogs Birthdate
function displayAge(dob) {
  // var difference = Date.now() - dob;
  // var ageDate = new Date(difference);
  // years = Math.abs(ageDate.getUTCMFullMonth() - 1970);
  // return years;
  var today = moment();
  var difference = moment().diff(today, dob);
  $("#age").append(difference);
  return difference;
}
displayAge(dogDob);
