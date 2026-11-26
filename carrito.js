function ActualizarCarrito(){
    const articulos = JSON.parse(localStorage.getItem('carrito')) || [];
    const contador = JSON.parse(localStorage.getItem('product-count')) || 0;

    let PrecioTotal = 0;

    const carrito = document.querySelector('#productosCarrito');

    if(contador == 0){
        carrito.innerHTML = "<h1> No hay productos en el carrito<h1>"
        return;
    }

    const tabla = document.createElement('table');

    tabla.classList.add('tabla')

   let encabezado = `
    <thead>
        <tr>
            <th>Cantidad</th>
            <th>Productos</th>
            <th>Precios</th>
        </tr>
    </thead>
   `
   let cuerpo = `<tbody>`
        /*<tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    */
    articulos.forEach(articulo => {
        cuerpo +=`
        <tr>
            <td>${articulo.contador}</td>
            <td>${articulo.titulo}</td>
            <td>${articulo.precio}</td>
        </tr>
        ` 

        const precio = parseFloat(
            String(articulo.precio).replace('$', '').replace(',', '.')
        );
        const cantidad = parseInt(articulo.contador, 10) || 0;

        PrecioTotal += precio * cantidad;
    });
    cuerpo += `</tbody>`;

    let pie = `
        <tfoot>
            <tr>
                <th colspan="3">Total: $${PrecioTotal.toFixed(2)}</th>
            </tr>
        </tfoot>   
    `;

    tabla.innerHTML = encabezado + cuerpo + pie;
    carrito.appendChild(tabla);

}

const botonConfirmar = document.getElementById('confirmarCom');

botonConfirmar.addEventListener('click', ()=>{
    alert('Gracias por comprar!')
})

const botonCancelar = document.getElementById('cancelarCom')
botonCancelar.addEventListener('click', ()=>{
    localStorage.removeItem('carrito');
    localStorage.removeItem('product-count');
    ActualizarCarrito();
})

document.addEventListener("DOMContentLoaded",ActualizarCarrito)



btonSubmit.addEventListener('click', ()=>{
    alert('se ha enviado el mensaje!')
});