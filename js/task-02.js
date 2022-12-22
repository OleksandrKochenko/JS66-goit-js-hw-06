const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
function makeListItem(item) {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.setAttribute('class', 'item');
  return listItem;
}
const listItems = ingredients.map(makeListItem);  
ingredientsList.append(...listItems);