const btn = document.querySelector('.totop');
function move() {
  if (window.scrollY > 500) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// When scrolling, we run the function
window.onscroll = move;
