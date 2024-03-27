$(document).ready(function () {
  $('#datepicker').datepicker({
    format: 'yyyy-mm-dd', // Format date as YYYY-MM-DD
    todayHighlight: true,
    autoclose: true,
    startDate: new Date() // Set minimum selectable date as today's date
  });

  // Form submission handling
  $('#appointmentForm').submit(function (event) {
    event.preventDefault();
    // Add your form submission logic here
    // Example: AJAX request to submit form data to the server
    // $.ajax({
    //   url: 'submit-appointment.php',
    //   type: 'POST',
    //   data: $(this).serialize(),
    //   success: function(response) {
    //     console.log(response);
    //     // Display success message or redirect to a thank you page
    //   },
    //   error: function(xhr, status, error) {
    //     console.error(error);
    //     // Display error message
    //   }
    // });
  });
});
// document.getElementById("Book").addEventListener("click", function () {
//   alert("Your appointment has been booked successfully!. Our Team Member will soon contact you for confirmation.");
// });

document.getElementById("Book").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form inputs
  var personName = document.getElementById("PersonName").value;
  var phone = document.getElementById("Phone").value;
  var email = document.getElementById("Email").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var typeOfAppointment = document.getElementById("cars").value;

  // Check if all fields are filled
  if (personName && phone && email && date && time && typeOfAppointment) {
    // Show success message
    alert("Your appointment has been booked successfully!. Our Team Member will soon contact you for confirmation.");
  } else {
    // Show error message
    alert("Please fill in all the fields.");
  }
});



