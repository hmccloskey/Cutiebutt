// Set the date and time the countdown ends
// Format: "Month Day, Year HH:MM:SS" (e.g., "Oct 30, 2025 15:37:25")
const END_TIME = new Date("Jan 1, 2026 00:00:00").getTime();

// Get the HTML elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("launch-message");

function updateCountdown() {
    // Get current time
    const now = new Date().getTime();
    
    // Find the distance between now and the end time
    const distance = END_TIME - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    if (distance > 0) {
        // Function to pad single digits with a leading zero
        const pad = (num) => String(num).padStart(2, '0');

        daysEl.innerHTML = pad(days);
        hoursEl.innerHTML = pad(hours);
        minutesEl.innerHTML = pad(minutes);
        secondsEl.innerHTML = pad(seconds);
    } else {
        // When the countdown is finished
        clearInterval(timerInterval);
        daysEl.innerHTML = hoursEl.innerHTML = minutesEl.innerHTML = secondsEl.innerHTML = "00";
        messageEl.innerHTML = "We are LIVE!";
    }
}

// Update the count down every 1 second
const timerInterval = setInterval(updateCountdown, 1000);

// Run the function once immediately so there is no 1-second delay
updateCountdown();
