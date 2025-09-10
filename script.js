// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variable to demonstrate scope
const globalMessage = "This is a global variable";

// Function with parameters and return value
function calculateSum(a, b) {
    // Local variables - these are only accessible within this function
    const localMessage = "Calculating sum...";
    console.log(localMessage);
    
    // Validate inputs
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Please enter valid numbers";
    }
    
    // Return the sum
    return a + b;
}

// Function to demonstrate scope
function demonstrateScope() {
    // This variable is local to this function
    const localMessage = "This is a local variable";
    console.log("Inside function:", localMessage);
    console.log("Global variable:", globalMessage);
    
    // Trying to access a variable from another function would cause an error
    // console.log(localMessageFromCalculate); // This would be undefined
    
    return "Scope demonstration completed. Check console for details.";
}

// Function to handle the calculation UI
function calculate() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Use our function with parameters and return value
    const result = calculateSum(num1, num2);
    
    // Display the result
    document.getElementById('result').textContent = `Result: ${result}`;
}

// Function to demonstrate scope in the UI
function scopeDemo() {
    const output = demonstrateScope();
    document.getElementById('scope-output').textContent = output;
}

// Part 3: Combining CSS Animations with JavaScript

// Function to trigger box animation
function triggerAnimation() {
    const box = document.getElementById('animated-box');
    
    // Remove the class if it exists to reset animation
    box.classList.remove('animated');
    
    // Trigger reflow to ensure the animation restarts
    void box.offsetWidth;
    
    // Add the class to trigger animation
    box.classList.add('animated');
    
    // Remove the class after animation completes
    setTimeout(() => {
        box.classList.remove('animated');
    }, 1500);
}

// Function to flip card
function flipCard() {
    const flipCard = document.querySelector('.flip-card');
    flipCard.classList.toggle('flipped');
}

// Function to toggle loading animation
function toggleLoading() {
    const loading = document.getElementById('loading-animation');
    loading.classList.toggle('hidden');
}

// Function to open modal with animation
function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');
}

// Function to close modal with animation
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

// Close modal if clicked outside of content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Additional function demonstrating parameters and return values
function createGreeting(name, timeOfDay = "day") {
    // Local variable inside function
    const greeting = `Good ${timeOfDay}`;
    
    // Return a customized message
    return `${greeting}, ${name}!`;
}

// Example usage of the createGreeting function
console.log(createGreeting("Alice", "morning")); // "Good morning, Alice!"
console.log(createGreeting("Bob")); // "Good day, Bob!"

// Function factory demonstrating closure and scope
function createMultiplier(factor) {
    // This inner function has access to the factor parameter
    return function(number) {
        return number * factor;
    };
}

// Create specific multiplier functions
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15