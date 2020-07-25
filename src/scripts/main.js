import "./parts/sliders.js";
import * as popups from "./parts/popups";
import * as sliders from "./parts/sliders";
import * as carousel from "./parts/carousel";
import $ from "jquery";

global.jQuery = $;
global.$ = $;

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});