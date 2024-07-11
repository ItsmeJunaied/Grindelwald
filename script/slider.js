let currentSlide = 0;

function changeSlide(direction) {
    const sliderInner = document.querySelector('.slider-inner');
    const totalSlides = sliderInner.children.length;
    const slideWidth = sliderInner.children[0].offsetWidth;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    sliderInner.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
