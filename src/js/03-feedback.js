import throttle from 'lodash.throttle';
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const formEl = document.querySelector('.feedback-form');
   
const userFeedback = {};

formEl.addEventListener('input', throttle(handlerInput, 500));
function handlerInput(event) {
    userFeedback[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(userFeedback));
}
  
const userData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (userData !== null) {
    emailEl.value = userData.email;
    messageEl.value = userData.message;
} 

formEl.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, message }
    } = event.currentTarget;

    if (email.value === "" || message.value === "") {
        alert("Please fill in all the fields!");
        return
    }

    console.log(userData);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
}