// script.js

let currentSlide = 0;

function changeSlide(direction) {
    const feedbackBoxes = document.querySelectorAll('.feedback-box');

    // Hide the current feedback box
    feedbackBoxes[currentSlide].classList.remove('show');
    feedbackBoxes[currentSlide].classList.add('hide');

    // Update current slide index
    currentSlide = (currentSlide + direction + feedbackBoxes.length) % feedbackBoxes.length;

    // Show the next feedback box
    feedbackBoxes[currentSlide].classList.remove('hide');
    feedbackBoxes[currentSlide].classList.add('show');
}
