function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('#controls>input');
const createButton = document.querySelector('button[data-create');
const deleteButton = document.querySelector('button[data-destroy');
const boxContainer = document.querySelector('#boxes');
let boxesArray = [];
let markup = '';
let userNumber = 0;
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    boxesArray.push(i)
  };
  markup = boxesArray
    .map((box) => `<div style = 'height: ${box * 10 + 30}px; width: ${box * 10 + 30}px; background-color: ${getRandomHexColor()}'></div>`)
    .join('');
  boxContainer.innerHTML = markup;
  boxesArray = [];
};
function destroyBoxes() {
  boxContainer.innerHTML = '';
}
input.addEventListener('input', (event) => {
  userNumber = event.currentTarget.value;
});
createButton.addEventListener('click', () => {
  return createBoxes(userNumber);
});
deleteButton.addEventListener('click', destroyBoxes);


