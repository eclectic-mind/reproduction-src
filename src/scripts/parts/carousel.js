import $ from "jquery";

global.jQuery = $;
global.$ = $;

const viewport = $("#viewport").width();
const slider = $("div.slider-carousel");
let viewSlide = 0;

$("#next-bottom").click(function () {
  event.preventDefault();
  if (viewSlide < 1) {
    viewSlide++;
  } else {
    viewSlide = 0;
  }

  slider.animate({
    'left': -viewSlide * viewport + "px"
  }, {
    'duration': 500
  })
});

$("#prev-bottom").click(function () {
  event.preventDefault();
  if (viewSlide > 0) {
    viewSlide--;
  } else {
    viewSlide = 1;
  }

  slider.animate({
    'left': -viewSlide * viewport + "px"
  }, {
    'duration': 500
  })
});