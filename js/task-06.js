const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        substituteClass('valid','invalid');
    } else {
        substituteClass('invalid','valid');
    }
});
function substituteClass(classAdd, classRemove) {
    inputEl.classList.add(classAdd);
    inputEl.classList.remove(classRemove);
}