const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.setAttribute('style', 'font-size: 36px');
range.addEventListener('input', (event) => {
    text.setAttribute('style', `font-size: ${36 * (event.currentTarget.value / 56)}px`);
})