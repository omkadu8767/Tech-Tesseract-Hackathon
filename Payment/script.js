document.getElementById("payButton").addEventListener("click", function() {
    const amount = 100;
  
    // Razorpay checkout options
    const options = {
      key: 'rzp_test_LN5SE3XfavXRvS',
      amount: amount * 100, 
      currency: 'INR',
      name: 'Swatha Bharat Portal',
      description: 'Payment for services',
      image: '../assests/logo.svg', // Add your logo image URL
      prefill: {
        name: 'Om Kadu',
        email: 'info@swasthabharat.com',
        contact: '8767488109'
      },
      handler: function(response) {
        alert('Payment successful!');
        console.log(response);
      }
    };
  
    const rzp = new Razorpay(options);
    rzp.open();
  });
  