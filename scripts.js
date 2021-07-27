//modal items
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.action-btn');
const closeBtn = document.querySelector('.close-btn');

//click events
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
})

//form validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const bio = document.getElementById('bio');

//show error message
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';
    
    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

//show valid message
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

//check required fields
function checkRequired(inputArr) {
    input.Arr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showValid(input); 
        }
    })
}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showValid(input);
        }
    })
}

//Get fieldname
function getFieldName(input) {
    return input.name.charAt(0).toUppercase() + input.name.slice(1);
}

//event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email, bio]);
})