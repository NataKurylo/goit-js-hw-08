import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
  
let userFeedback = {};
let savedUserData = localStorage.getItem('feedback-form-state');
    
if (savedUserData !== null) {
    userFeedback = JSON.parse(savedUserData);
    for (const key in userFeedback) {
        formEl.elements[key].value = userFeedback[key];
        // console.log(formEl.elements[key].value);
        // console.log(userFeedback[key]);
    }
}

formEl.addEventListener('input', throttle(handleInput, 500));
function handleInput(event) {
    userFeedback[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(userFeedback));
    // console.log(userFeedback[event.target.name]);
    // console.log(event.target.value)
}
// console.log(userFeedback);
// console.log(savedUserData);

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
    
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state', JSON.stringify(userFeedback));
    userFeedback = {};
    formEl.removeEventListener('input', throttle(handleInput, 500));
}