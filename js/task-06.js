const input = document.querySelector('#validation-input');
input.addEventListener('blur', () => {
    if (+input.value.length === +input.dataset.length) {
        input.setAttribute('class', 'valid');
    } else {
        input.setAttribute('class', 'invalid');
    }
})