document.addEventListener('DOMContentLoaded', function() {
    new Splide('.splide', {
        type: 'loop', // This enables infinite looping
        perPage: 1, // Number of slides to show at once
        perMove: 1, // Number of slides to move at a time
        gap: '1rem', // Space between slides
        autoplay: true, // Enable auto-play
        interval: 3000, // Auto-play interval in ms
        pauseOnHover: true, // Pause on hover
        resetProgress: false, // Don't reset progress bar when paused
        arrows: true, // Show navigation arrows
        pagination: true, // Show pagination dots
        speed: 600, // Transition speed in ms
        rewind: true, // Go to first/last slide when reaching start/end
        breakpoints: {
            768: {
                perPage: 1, // Adjust for smaller screens
                gap: '0.5rem'
            }
        }
    }).mount();
});