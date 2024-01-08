let currentSlide = 0; // Initialize currentSlide

function changeSlide(direction) {
    const feedbackBoxes = document.querySelectorAll('.feedback-box');
    const totalSlides = feedbackBoxes.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Reset z-index for all slides
    feedbackBoxes.forEach((box, index) => {
        const zIndex = index === currentSlide ? 1 : 0;
        box.style.zIndex = zIndex;
    });

    const newTransformValue = -currentSlide * 100; // Assuming each slide is 100% wide
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue}%)`;
}
