document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Extract form data
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const passengers = document.getElementById('passengers').value;
    const flightClass = document.getElementById('class').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Perform validation if needed

    // Simulate a booking process
    alert(`Booking successful! \n\nDetails:\nFrom: ${source}\nTo: ${destination}\nDeparture: ${departureDate}\nReturn: ${returnDate}\nPassengers: ${passengers}\nClass: ${flightClass}\nPayment: ${paymentMethod}`);
    
    // Clear the form after submission
    document.getElementById('bookingForm').reset();
});
