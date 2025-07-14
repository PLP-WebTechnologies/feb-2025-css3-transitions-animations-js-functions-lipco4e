// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const likeBtn = document.getElementById('like-btn');
    const body = document.body;

    // --- Task: Store and retrieve data using localStorage ---

    // 1. Check for a saved theme in localStorage on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.dataset.theme = savedTheme;
    }

    // 2. Function to handle theme toggling
    function toggleTheme() {
        // Check current theme and switch to the other
        let currentTheme = body.dataset.theme;
        let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Apply the new theme to the body
        body.dataset.theme = newTheme;

        // Save the new theme preference to localStorage
        localStorage.setItem('theme', newTheme);
        console.log(`Theme changed to ${newTheme} and saved to localStorage.`);
    }

    // --- Task: Apply JavaScript to trigger animations ---

    // 3. Function to trigger the heart animation
    function animateLikeButton() {
        // Add the animation class
        likeBtn.classList.add('animate-heart');
        console.log('Animation class added.');

        // Important: Remove the class after the animation ends
        // This allows the animation to be re-triggered on subsequent clicks
        likeBtn.addEventListener('animationend', () => {
            likeBtn.classList.remove('animate-heart');
            console.log('Animation class removed.');
        }, { once: true }); // { once: true } ensures the event listener is removed after it runs
    }


    // --- Event Listeners ---
    
    // Add click event listener for the theme toggle button
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Add click event listener for the like button to trigger animation
    likeBtn.addEventListener('click', animateLikeButton);

});