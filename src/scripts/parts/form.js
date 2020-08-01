const form = document.querySelector("#write-us");
const submitButton = form.querySelector("#send");
const emailField = form.querySelector("#email");
const messageField = form.querySelector("#text");
const errorMail = form.querySelector("#error-mail");
const errorMsg = form.querySelector("#error-msg");
const success = document.querySelector("#success-msg");
const patternMail = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/;

const checkEmail = (val) => {
  return (val.length > 0 && !!patternMail.test(val)) ? true : false;
};

const checkText = (val) => {
  return val.length > 0 ? true : false;
};

const validateForm = () => {
  let userEmail = emailField.value;
  let userMessage = messageField.value;

  if (!!checkEmail(userEmail) && !!checkText(userMessage)) {
    success.classList.remove("invisible");
    form.classList.add("invisible");
  } else if (!checkEmail(userEmail)) {
    emailField.setCustomValidity("неправильная почта");
    errorMail.classList.remove("invisible");
    emailField.classList.add("wrong");
  } else if (!checkText(userMessage)) {
    messageField.setCustomValidity("неправильное сообщение");
    errorMsg.classList.remove("invisible");
    messageField.classList.add("wrong");
  } else {
    return;
  }
};

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  validateForm();
})