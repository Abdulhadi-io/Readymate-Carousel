// script.js
let index = 0;
const slider = document.getElementById("slider");

function updateSlider() {
  slider.style.transform = `translateX(-${index * 215}px)`;
}

function nextSlide() {
  if (index < 3) {
    index++;
    updateSlider();
  }
}

function prevSlide() {
  if (index > 0) {
    index--;
    updateSlider();
  }
}

// Auto slide
setInterval(() => {
  index = (index + 1) % 4;
  updateSlider();
}, 3000);
