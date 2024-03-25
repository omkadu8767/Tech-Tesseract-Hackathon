$(document).ready(function() {
    $('#datepicker').datepicker({
      format: 'yyyy-mm-dd', // Format date as YYYY-MM-DD
      todayHighlight: true,
      autoclose: true,
      startDate: new Date() // Set minimum selectable date as today's date
    });
  
    // Form submission handling
    $('#appointmentForm').submit(function(event) {
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
  