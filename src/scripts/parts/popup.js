const body = document.querySelector("body");
const link = document.querySelector(".rules");
const shadow = document.querySelector(".shadow");
const modal = document.querySelector(".modal");
const close = modal.querySelector(".close");

const showModal = (evt) => {
  evt.preventDefault();
  shadow.classList.remove("invisible");
  modal.classList.remove("invisible");
  body.classList.add("is-blurred");
};

const hideModal = (evt) => {
  shadow.classList.add("invisible");
  modal.classList.add("invisible");
  body.classList.remove("is-blurred");
};

const hideModalByClick = (evt) => {
  evt.preventDefault();
  hideModal();
};

const hideModalByEsc = (evt) => {
  if (evt.key === `Escape` || evt.key === `Esc`) {
    hideModal();
  }
};

link.addEventListener("click", showModal);
close.addEventListener("click", hideModalByClick);
shadow.addEventListener("click", hideModalByClick);
document.addEventListener(`keydown`, hideModalByEsc);