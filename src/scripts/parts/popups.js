const body = document.querySelector('body');
const link = document.querySelector('.rules');
const modal = document.querySelector('.shadow');
const close = document.querySelector('.close');

const showModal = (evt) => {
  evt.preventDefault();
  modal.classList.remove('invisible');
  body.classList.add('is-blurred');
};

const hideModal = (evt) => {
  evt.preventDefault();
  modal.classList.add('invisible');
  body.classList.remove('is-blurred');
};

link.addEventListener('click', showModal);

close.addEventListener('click', hideModal);