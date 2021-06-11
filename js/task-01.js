
const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории:`);
[...categoriesEl].map(category => {
    const categoryTitle = category.firstElementChild.textContent;
    console.log(`Категория: ${categoryTitle}`);
    const categoryLength = category.lastElementChild.children.length;
    console.log(`Количество элементов: ${categoryLength}`);
});


