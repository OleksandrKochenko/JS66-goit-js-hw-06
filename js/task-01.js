const categoriesList = document.querySelector('#categories');
const categories = categoriesList.children;
console.log(`Number of categories: ${categories.length}`);

const listItems = document.querySelectorAll('.item');
listItems.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.querySelectorAll('li').length}`);
})