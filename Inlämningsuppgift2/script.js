const form = document.getElementById('validationForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('repeatPassword');
const terms = document.getElementById('terms')
const btn = document.getElementById('byn')

// ERROR & SUCCESS
const setError = (input) => {
    const errorMessage = document.querySelector('#errorMessage')
    input.classList.add('is-invalid')
    input.classList.remove('is-valid')
    errorMessage.classList.remove('d-none')
    input.focus(input);
    console.log('Invalid input-field: ' + input.getAttribute('id'))
    return false;
}
const setSuccess = (input) => {
    errorMessage.classList.add('d-none')
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
    return true;
}
// VALIDERING
const validateFirstName = (input) => {
    const regFirstName = /\d/;
    if (input.value.trim() === '') {
        return setError(firstName);
    } else if (regFirstName.test(input.value) || input.value.length <= 2) {
        return setError(firstName);
    }
    return setSuccess(firstName)
}
const validateLastName = (input) => {
    const regLastName = /\d/;
    if (input.value.trim() === '') {
        return setError(lastName);
    } else if (regLastName.test(input.value) || input.value.length <= 2) {
        return setError(lastName);
    }
    return setSuccess(lastName)
}
const validateEmail = (input) => {
    const mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (input.value.trim() === '') {
        return setError(email);
    } else if (!mailformat.test(input.value)) {
        return setError(email);
    }
    return setSuccess(email)
}
const validatePassword = (input) => {
    if (input.value.trim() === '') {
        return setError(password);
    } else if (password.value.length <= 6) {
        return setError(password);
    }
    return setSuccess(password)
}
const validatePassword2 = (input) => {
    if (input.value.length < 6 || input.value != password.value) {
        return setError(password2);
    }
    return setSuccess(password2)
}
const validateTerms = (terms) => {
    if (!terms.checked) {
        return setError(terms);
    }
    return setSuccess(terms)
}
//Check inputs & User creation
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.clear();
    validateFirstName(firstName)
    validateLastName(lastName)
    validateEmail(email)
    validatePassword(password)
    validatePassword2(password2)
    validateTerms(terms)

    if (firstName.classList.contains('is-valid') &&
        lastName.classList.contains('is-valid') &&
        email.classList.contains('is-valid') &&
        password.classList.contains('is-valid') &&
        password2.classList.contains('is-valid') &&
        terms.classList.contains('is-valid')) {
        const user = {
            FirstName: firstName.value,
            LastName: lastName.value,
            Email: email.value,
            Password: password.value,
        }
        console.log('Success! New user created:')
        console.table(user)
    }
    else {
        errorMessage.classList.remove('d-none') //Quickfix om man ändrar input i övre fält efter allt är godkänt.
    }
})