document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer Logic
    function countdown() {
        const now = new Date().getTime();
        const endDate = new Date('2024-12-31T23:59:59').getTime(); // Set your desired end date and time here
        const distance = endDate - now;

        if (distance < 0) {
            clearInterval(timerInterval);
            document.querySelector('.timer').innerHTML = "EXPIRED";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }

    const timerInterval = setInterval(countdown, 1000);

    // Conversion Logic
    const conversionRate = 0.005; // Example conversion rate

    document.getElementById('usdt-amount').addEventListener('input', function () {
        const amount = parseFloat(this.value) || 0;
        const tokens = (amount / conversionRate).toFixed(2);
        document.getElementById('token-amount').value = `You will get ${tokens} tokens`;
    });

    // Connect Wallet Button Logic
    document.getElementById('connect-wallet').addEventListener('click', function () {
        // Simulate wallet connection
        alert('Wallet connected successfully!');
        // Change button text to "Buy Tokens"
        document.getElementById('connect-wallet').style.display = 'none';
        document.getElementById('buy-tokens').style.display = 'block';
    });

    // Buy Tokens Button Logic
    document.getElementById('buy-tokens').addEventListener('click', function () {
        alert('Tokens purchased successfully!');
        // Placeholder for buy tokens logic
    });
});

document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
});

