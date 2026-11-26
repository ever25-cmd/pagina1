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

contacto.addEventListener('click', () => {
  setTimeout(() => {
  
   foot.style.border = 'none';  
   foot.style.animation = 'none';  
  }, 2000);
   foot.style.border = '2px solid rgb(252, 225, 17)';  
   foot.style.animation = 'parpadeo 1s infinite';  
});


// Carrito
 
const Articulos = document.querySelectorAll('.Productos .producto');
const ContadorProduc = JSON.parse(localStorage.getItem('product-count')) || 0;
let contadorP = parseInt(ContadorProduc);


function actualizarContador(){
document.querySelector('#count').innerHTML = contadorP !== 0 ? contadorP : '';
}

actualizarContador();
const ProductosAgregados = localStorage.getItem('carrito')
  ? JSON.parse(localStorage.getItem('carrito'))
  : [];

Articulos.forEach(product => {
  const boton = product.querySelector('.BTNcomprar');

  boton.addEventListener('click', () => {
    const tituloProduc = product.querySelector('h3').textContent;
    const precioProduc = product.querySelector('p').textContent;

    const datosProducto = {
      titulo: tituloProduc,
      precio: precioProduc,
      contador: 1,
    };

  
    const existeItem = ProductosAgregados.find(
      item => item.titulo === datosProducto.titulo
    );

    if (existeItem) {
      existeItem.contador += 1;
    } else {
      ProductosAgregados.push(datosProducto);
    }

    contadorP +=1;
    
    actualizarContador();
    localStorage.setItem('carrito', JSON.stringify(ProductosAgregados));
    localStorage.setItem('product-count', JSON.stringify(contadorP));
  });
});


const btonSubmit = document.querySelector('#submit');

btonSubmit.addEventListener('click', ()=>{
    alert('se ha enviado el mensaje!')
});

