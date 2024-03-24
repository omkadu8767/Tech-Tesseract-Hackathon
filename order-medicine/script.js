const cartItems = [];

document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const order = {};
    formData.forEach((value, key) => {
        order[key] = value;
    });

    // Add order to cart
    cartItems.push(order);

    // Update cart display
    const cartList = document.getElementById("cartItems");
    cartList.innerHTML = "";
    cartItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.quantity}x ${item.medicineName}`;
        cartList.appendChild(listItem);
    });

    // Show checkout button if cart has items
    const checkoutBtn = document.getElementById("checkoutBtn");
    if (cartItems.length > 0) {
        checkoutBtn.style.display = "block";
    } else {
        checkoutBtn.style.display = "none";
    }

    // Reset form
    this.reset();
});

document.getElementById("checkoutBtn").addEventListener("click", function () {
    // Simulate checkout process (you can implement your logic here)
    // For example, you can send the cartItems array to your server

    // Display confirmation message
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.textContent = "Your order has been placed successfully!";
    confirmationMessage.style.display = "block";

    // Clear cart
    cartItems.length = 0;
    const cartList = document.getElementById("cartItems");
    cartList.innerHTML = "";
    document.getElementById("checkoutBtn").style.display = "none";
});
