document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("text");
  const str = text.getAttribute("data-text");
  window.onload = () => {
    for (let i = 0; i < str.length; i++) {
      let span = document.createElement("span");
      span.innerHTML = str[i];
      text.appendChild(span);
      span.style.transform = `rotate(${11 * i}deg)`;
    }
  };
  const sliderItems = document.querySelectorAll("[data-slider-id]");
  sliderItems.forEach((slider) => {
    const swiper = new Swiper(slider, {
      preloadImages: false,
      loop: false,
      slidesPerView: 1,
      spaceBetween: 30,
      lazy: true,
      speed: 500,
      breakpoints: {
        800: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      },
    });
  });
});
