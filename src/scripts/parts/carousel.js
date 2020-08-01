import $ from "jquery";

global.jQuery = $;
global.$ = $;

$(document).ready(() => {
  $('.js-lazy').each((index, el) => {
    const $image = $(el);
    const realSrc = $image.attr('data-src');

    $image.attr('src', realSrc);
  });
});

const viewport = $("#viewport").width();
const slider = $(".slider-carousel");
let current = 0;

const moveSlides = () => {
  slider.animate({
    'left': -current * viewport + "px"
  }, {
    'duration': 500
  })
};

$("#next-bottom").on('click', function () {
  event.preventDefault();
  if (current < 1) {
    current++;
  } else {
    current = 0;
  }

  moveSlides();
});

$("#prev-bottom").on('click', function () {
  event.preventDefault();
  if (current > 0) {
    current--;
  } else {
    current = 1;
  }

  moveSlides();
});