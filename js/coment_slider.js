let currentSlide = 0;

function changeSlide(direction) {
    const slider = document.querySelector('.slider');
    const sliderWidth = document.querySelector('.feedback-box').offsetWidth;
    const totalSlides = document.querySelectorAll('.feedback-box').length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const newTransformValue = -currentSlide * sliderWidth;
    slider.style.transform = `translateX(${newTransformValue}px)`;
}
