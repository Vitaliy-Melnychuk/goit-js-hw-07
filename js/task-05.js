const inputEl = document.querySelector('#name-input');
let inputValue = inputEl.value;
const outputEl = document.querySelector('#name-output');
inputEl.addEventListener('keypress', () => {
    if (inputEl.value !== '') {
        outputEl.innerHTML = `${inputEl.value}`;
    } else {
        outputEl.innerHTML = 'незнакомец';
    }
});