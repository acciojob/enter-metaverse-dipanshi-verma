const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const searchBox = document.querySelector('.search');

btn.addEventListener('click', () => {
  searchBox.classList.add('active');
  input.focus();
});
