const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const wrap = document.querySelector('.img-wrap');
const imgs = document.querySelectorAll('.img-wrap img');
const indicadores = document.querySelectorAll('.indicadores span');

const contacto = document.querySelector('#contacto');
const foot = document.querySelector('.footer');

let idx = 0;

function showImg() {
  if (idx >= imgs.length) idx = 0;
  if (idx < 0) idx = imgs.length - 1;

  wrap.style.transform = `translateX(-${idx * 100}%)`;

  indicadores.forEach((dot, i) => {
    dot.classList.toggle('activo', i === idx);
  });
}

next.addEventListener('click', () => { idx++; showImg(); });
prev.addEventListener('click', () => { idx--; showImg(); });

indicadores.forEach((dot, i) => {
  dot.addEventListener('click', () => { idx = i; showImg(); });
});

setInterval(() => { idx++; showImg(); }, 7000);

showImg();
