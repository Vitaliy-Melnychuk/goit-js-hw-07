const inputEl = document.querySelector('#controls').firstElementChild;
const boxesEl = document.querySelector('#boxes');
const renderEl = document.querySelector('button[data-action="render"]');
const destroyEl = document.querySelector('button[data-action="destroy"]');
function createBoxes(amount) {
    const arrayBoxesEl = [];
    let widthEl = 30;
    let r, g, b;
    for (let i=0; i<amount; i+=1) {
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        const divEl = document.createElement('div');
        divEl.style.backgroundColor = `rgba(${r},${g},${b},1)`;
        divEl.style.width = `${widthEl}px`;
        divEl.style.height = `${widthEl}px`;
        arrayBoxesEl.push(divEl);
        widthEl += 10;
    }
    boxesEl.append(...arrayBoxesEl);
}
renderEl.addEventListener('click', () => createBoxes(Number(inputEl.value)));
destroyEl.addEventListener('click', () => destroyBoxes());
function destroyBoxes() {
    boxesEl.innerHTML = '';
}