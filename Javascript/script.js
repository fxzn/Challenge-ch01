$(".owl-carousel").owlCarousel({
  nav: true,
  navText: ["<img src='Foto/Left-button.png' style='width: 32px;'>", "<img src='Foto/right-button.png' style='width: 32px'>"],
  dots: false,
  stagePadding: 30,
  center: true,
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
