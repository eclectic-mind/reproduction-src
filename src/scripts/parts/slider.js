import $ from "jquery";

global.jQuery = $;
global.$ = $;

const thumbHeight = 142;
const margin = 18;
const shift = thumbHeight + margin;

const viewport = $("#banners").width();
const slider = $(".slider-vertical");
const nav = $('.previews-container');
const thumbnails = document.querySelectorAll(".prv");
let current = 0;

const dezactivate = (item) => {
  if (item.classList.contains('active')) {
    item.classList.remove('active');
  }
  return item;
};

const activate = () => {
  thumbnails.forEach(dezactivate);
  thumbnails[current].classList.add('active');
};

const moveSlides = () => {
  slider.animate({
    'left': -current * viewport + "px"
  }, {
    'duration': 500
  })
};

const moveNavBar = () => {
  nav.animate({
    'top': -current * shift + "px"
  }, {
    'duration': 500
  })
};

const move = () => {
  moveSlides();
  activate();
  moveNavBar();
};

thumbnails[current].classList.add('active');

$("#next-top").on('click', function () {
  event.preventDefault();

  if (current < 5) {
    current++;
  } else {
    current = 0;
  }

  move();

});

$("#prev-top").on('click', function () {
  event.preventDefault();

  if (current > 0) {
    current--;
  } else {
    current = 5;
  }

  move();

});