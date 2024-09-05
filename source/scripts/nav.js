const menu = document.querySelector('.navigation-list');
const toggleBtn = document.querySelector('.main-navigation__toggle');

menu.classList.remove('no-js');
document.querySelector('.container').classList.remove('no-js');
document.querySelector('.main-header__navigation').classList.remove('no-js');

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
