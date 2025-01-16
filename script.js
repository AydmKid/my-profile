// Visitor count logic using localStorage
const visitorKey = 'visitorCount'; // Key for localStorage
let visitorCount = localStorage.getItem(visitorKey);

// Initialize count if it doesn't exist
if (!visitorCount) {
    visitorCount = 1;
} else {
    visitorCount = parseInt(visitorCount) + 1;
}

// Update localStorage with the new count
localStorage.setItem(visitorKey, visitorCount);

// Display the count
document.getElementById('visitor-number').textContent = visitorCount;

// Optional: Log visit details in the console
console.log(`Welcome! You are visitor number ${visitorCount}.`);
