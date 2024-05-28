document.querySelector('.button').addEventListener('click', function() {
    alert('Free demo booked successfully!');
});

function showPaymentOptions(button) {
    const paymentOptions = button.nextElementSibling;
    paymentOptions.style.display = 'block';
}

// JavaScript to handle the personal assistance details
document.querySelectorAll('.personal-assistance ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.personal-assistance .details').forEach(detail => {
            detail.classList.remove('active');
        });
        document.getElementById(this.getAttribute('data-details')).classList.add('active');
    });
});
