export default function slider(selector) {
  var swiper = new Swiper(selector, {
    innerWidth: 320,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      375: {
        paceBetween: 16,
        loop: true,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 16,
        loop: true,
        slidesPerView: 2,
      },
      1280: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },
  });
}
