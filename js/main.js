$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const mLine = $(".menu-line");
  const tab = $(".tab");
  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    mMenuBtn.toggleClass("m-arrow-button");
    mLine.toggleClass("m-arrow");
    $("body").toggleClass("no-scroll");
  });

  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });

  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 25,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".button-next",
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
});