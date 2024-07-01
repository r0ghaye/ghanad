const swiper2 = new Swiper(".daily-product-slider", {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 80,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
   0: {
spaceBetween: 50,
slidesPerView: .78,
   },
   400: {
    spaceBetween: 50,
    slidesPerView: .9,
   },
    497: {
      spaceBetween: 60,
      slidesPerView: 1.2,
    },
    768: {
      spaceBetween: 60,
      slidesPerView: 1.8,
    },
    1180: {
      spaceBetween: 80,
      slidesPerView: 2.9,
    },
   
  },
});
