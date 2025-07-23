document.addEventListener("DOMContentLoaded", () => {
  const sliderItems = document.querySelectorAll("[data-swiper-id]");
  sliderItems.forEach((slider) => {
    const swiper = new Swiper(slider, {
      preloadImages: false,
      loop: false,
      slidesPerView: 1,
      lazy: true,
      speed: 500,
      breakpoints: {
        800: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: slider.querySelector(".swiper-button-next"),
        prevEl: slider.querySelector(".swiper-button-prev"),
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
});
