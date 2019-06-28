$(document).ready(function(){


});

var firebaseConfig = {
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 var database = firebase.database();

 var users = database.ref();

 // When first loaded or when the connections list changes...
users.on("value", function(snapshot) {

    if(snapshot.child("employee").exists() && snapshot.child("role").exists() && snapshot.child("startDate")) {
        employee = snapshot.val().employee;
        role = snapshot.val().role;
        startDate = snapshot.val().startDate;
        
        $("#tableEmployee").text(snapshot.val().employee);
        $("#tableRole").text(snapshot.val().role);
        $("#tableStartDate").text(snapshot.val().startDate);
        $('#tableRate').text(snapshot.val().monthlyRate);
    }

  });

  var employee;
  var role;
  var startDate;
  var mWorked;
  var mRate;
  var totalBilled;

// Button for adding Employees
$(".submitEntry").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var empName = $("#inputEmployee").val().trim();
    var empRole = $("#inputRole").val().trim();
    var empStartDate = moment($("#inputStartDate").val().trim(), "MM/DD/YYYY").format("X");
    var empRate = parseInt($("#inputRate").val().trim());
    // var empStartDate = $('#inputStartDate').val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newEmp = {
      employee: empName,
      role: empRole,
      startDate: empStartDate,
      // start: empStart,
      monthlyRate: empRate
    };
  
    // Uploads employee data to the database
    users.push(newEmp);
  
    // Logs everything to console
    console.log(newEmp.employee);
    console.log(newEmp.role);
    console.log(newEmp.startDate);
    console.log(newEmp.monthlyRate);
  
    alert("Employee successfully added");
  
    // Clears all of the text-boxes
    $("#inputEmployee").val("");
    $("#inputRole").val("");
    $("#inputStartDate").val("");
    $("#inputRate").val("");
  });


  users.on('child_added', function(childSnapshot) {
    console.log(childSnapshot.val().employee);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().monthlyRate);

  })