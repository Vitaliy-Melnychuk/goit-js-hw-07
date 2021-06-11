const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.oninput = () => {
    textEl.style.fontSize = `${inputEl.value}px`;
};
