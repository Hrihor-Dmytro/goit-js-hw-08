import throttle from 'lodash.throttle';

let formValue = {};

const formElement = document.querySelector('form');
const savedMessage = localStorage.getItem('feedback-form-state');

formElement.addEventListener('submit', onFormSubmit);
formElement.addEventListener('input', throttle(onTextValueInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formValue);
}
if (savedMessage) {
  formValue = JSON.parse(savedMessage);

  for (let key in formValue) {
    formElement.elements[key].value = formValue[key];
  }
}
function onTextValueInput(evt) {
  formValue[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}
