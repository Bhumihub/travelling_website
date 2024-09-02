document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    // You can add your form submission logic here
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    console.log('Form Data:', data);
    
    // You could also send the data to a server or perform additional validation here
    alert('Ticket booked successfully!');
});