const body = document.getElementById("cuerpo");
const activarFormulario = document.getElementById("addButton");
const formulario = document.getElementById("formulario");
const botonCerrar = document.getElementById("closeButtonForm");
const botonAgregar = document.getElementById("addButtonForm");
const ulItems = document.getElementById("ulItems");
const empty = document.getElementById("empty");
const item = document.getElementById("item");
const itemDescripcion = document.getElementById("itemDescripcion");
let i = 0;
let productos = [];

activarFormulario.addEventListener("click", (e) => {
  e.preventDefault();
  formulario.style.display = "flex";
});

botonCerrar.addEventListener("click", (e) => {
  formulario.style.display = "none";
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let newProduct = {
    titulo: e.target.titulo.value,
    categoria: e.target.categoria.value,
    detalle: e.target.detalle.value,
    id: new Date(),
  };
  console.log(newProduct.id);
  productos.push(newProduct);
  //addItem(newProduct);
  empty.style.display = "none";
  createLi(productos.at(-1), i);
});

const createLi = (producto, contador) => {
  const changeDisplay = () => {
    if (detalleLoco.style.display === "none") {
      detalleLoco.style.display = "block";
    } else {
      detalleLoco.style.display = "none";
    }
  };

  let li = document.createElement("li");
  let h1 = document.createElement("h1");
  let button = document.createElement("button");
  let detalleLoco = document.createElement("div");
  let foto = document.createElement("img");
  let divInfo = document.createElement("div");
  li.classList.add("productito");
  divInfo.classList.add("productitoItem");
  foto.classList.add("itemImagen");
  button.classList.add("itemMore");
  foto.setAttribute("src", `./img/${producto.categoria}`);
  detalleLoco.innerText = producto.detalle;
  h1.innerText = producto.titulo;
  button.innerText = "+";
  detalleLoco.style.display = "none";
  ulItems.appendChild(li);
  li.appendChild(divInfo);
  li.appendChild(detalleLoco);
  divInfo.appendChild(foto);
  divInfo.appendChild(h1);
  divInfo.appendChild(button);

  button.onclick = changeDisplay;
  button.setAttribute("id", contador);
  console.log(detalleLoco);
  contador++;
};

const addItem = (newProduct) => {
  let item = `<li class="productito">
  <div class="productitoitem">
    <img class="itemImagen" src="./y/img/${producto.categoria}" alt="${producto.titulo}" />
    <h3>${producto.titulo}</h3>
    <button
      onclick="descripcionItem('${producto.titulo}','${producto.categoria}','${producto.detalle}')"
      class="itemMore"
    >
      +
    </button>
  </div>
  <div class="productoDetalle">
    <a onclick="cerrarDetalle()">
      <img
        class="botonCerrarDetalle"
        id="botonCerrarDetalle"
        src="./y/img/cerrar.png"
        alt="boton cerrar"
      />
    </a>
    <img class="itemImagen" src="./y/img/${producto.categoria}" alt="${producto.titulo}" />
    <h3>${producto.titulo}</h3>
    <p>${producto.detalle}</p>
  </div>
</li>`;
};

//const descripcionItem = (id) => {
/*let detalleLoco = `<div class="productoDetalle" >
          <a onclick="cerrarDetalle()">
          <img class="botonCerrarDetalle" id="botonCerrarDetalle" src="./img/cerrar.png" alt="boton cerrar" />
          </a>
          <img class="itemImagen" src="img/${categoria}" alt="${titulo}"/>
          <h3>${titulo}</h3>
          <p>${detalle}</p>
          </div>`;*/
// productos.map((producto) => {
//  if (id === producto.id) {
//   }
//  });
// itemDescripcion.innerHTML += detalleLoco;
// itemDescripcion.style.display = "flex";
// ulItems.style.display = "none";
//  body.classList.add("bodyDetalle");
//};

const cerrarDetalle = () => {
  const botonCerrarDetalle = document.getElementById("botonCerrarDetalle");
  botonCerrarDetalle.addEventListener("click", (e) => {
    console.log("hola pepe");
    itemDescripcion.style.display = "none";
    ulItems.style.display = "flex";
    body.classList.remove("bodyDetalle");
  });
};
