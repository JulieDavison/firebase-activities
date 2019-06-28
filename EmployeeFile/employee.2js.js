// Button for adding Employees
$(".submitEntry").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var empName = $("#inputEmployee").val().trim();
  var empRole = $("#inputRole").val().trim();
//   var empStart = moment($("#inputStartDate").val().trim(), "MM/DD/YYYY").format("X");
  var empRate = $("#inputRate").val().trim();

  // Creates local "temporary" object for holding employee data
  var newEmp = {
    name: empName,
    role: empRole,
    // start: empStart,
    rate: empRate
  };

  // Uploads employee data to the database
//   database.ref().push(newEmp);

  // Logs everything to console
  console.log(newEmp.name);
  console.log(newEmp.role);
  console.log(newEmp.start);
  console.log(newEmp.rate);

  alert("Employee successfully added");

  // Clears all of the text-boxes
  $("#inputEmployee").val("");
  $("#inputRole").val("");
//   $("#inputStartDate").val("");
  $("#inputRate").val("");
});