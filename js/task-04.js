const valueEl = document.querySelector('#value');
let counterValue = valueEl.textContent;
const decrement = document.querySelector('button[data-action="decrement"]').addEventListener('click', () =>{
    valueEl.textContent = Number(counterValue) - 1;
    counterValue = valueEl.textContent;
});
const increment = document.querySelector('button[data-action="increment"]').addEventListener('click', () =>{
    valueEl.textContent = Number(counterValue) + 1;
    counterValue = valueEl.textContent;
});
