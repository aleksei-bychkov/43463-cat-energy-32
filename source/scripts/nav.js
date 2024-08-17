const menu = document.querySelector('.navigation-list');
const toggleBtn = document.querySelector('.main-navigation__toggle');


toggleBtn.onclick = function() {
  menu.classList.toggle('show');
  toggleBtn.classList.toggle('open');
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    menu.classList.remove('show');
    toggleBtn.classList.remove('open');
  }
});
