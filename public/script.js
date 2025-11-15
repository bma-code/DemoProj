// Get DOM elements
const greetingElement = document.getElementById('greeting');
const changeButton = document.getElementById('changeGreeting');

// Function to get a random greeting from the server
async function changeGreeting() {
    try {
        // Add fade effect
        greetingElement.style.opacity = '0';
        
        // Fetch a random greeting from the API
        const response = await fetch('/api/greeting/random');
        const data = await response.json();
        
        setTimeout(() => {
            greetingElement.textContent = data.greeting;
            greetingElement.style.opacity = '1';
        }, 150);
    } catch (error) {
        console.error('Error fetching greeting:', error);
        // Fallback to a default greeting
        setTimeout(() => {
            greetingElement.textContent = 'Hello, World!';
            greetingElement.style.opacity = '1';
        }, 150);
    }
}

// Function to load all available greetings (for demonstration)
async function loadAllGreetings() {
    try {
        const response = await fetch('/api/greetings');
        const data = await response.json();
        console.log('Available greetings:', data.greetings);
    } catch (error) {
        console.error('Error loading greetings:', error);
    }
}

// Add event listener to button
changeButton.addEventListener('click', changeGreeting);

// Add some interactive effects
changeButton.addEventListener('mouseenter', () => {
    greetingElement.style.transform = 'scale(1.05)';
});

changeButton.addEventListener('mouseleave', () => {
    greetingElement.style.transform = 'scale(1)';
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadAllGreetings();
    console.log('Hello World Node.js App loaded successfully! 🎉');
    console.log('Click the button to get random greetings from the server!');
});