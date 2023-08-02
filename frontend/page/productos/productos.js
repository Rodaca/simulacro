import { add,del,one,all,upd } from "./api.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loadproducto();
});


//Read
async function loadproducto() {
    const productos = await all();
    const contenedor = document.querySelector("#contenedorProductos");
    const descuento=0.75
    productos.forEach((producto) => {
        const {nombre,foto,marca,codigo,precio_compra,precio_venta,categorias,descripcion,cantidad}=producto;
        
        categorias.forEach(element => {
            `<button class="btn  bg-principal mb-2" type="button">${element}</button>`
        })
        contenedor.innerHTML+=`
        <div class="card"  style="width: 18rem;">
                            <div class="d-flex">
                                <img src="../img/descargar.jpg" style="width: 14rem;" class="card-img-top" alt="..." data-bs-toggle="modal" data-bs-target="#modalmuestraProducto">
                                <div class="d-flex flex-column justify-content-center gap-2 p-1">
                                    <button type="button" class="btn btn-outline-dark">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                    <span class="text-center">${cantidad}</span>
                                    <button type="button" class="btn btn-outline-dark">
                                        <i class="fa fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-outline-warning">
                                        <i class="fas fa-pencil"></i>
                                    </button>
                                    <button type="button" class="btn btn-outline-danger">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                            <span data-bs-toggle="modal" data-bs-target="#modalmuestraProducto">
                                <div class="card-body">
                                    <h5 class="card-title">${nombre}</h5> 
                                </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">${marca}</li>
                                    <li class="list-group-item">Codigo: ${codigo}</li>
                                    <li class="list-group-item d-flex justify-content-around">
                                        <p>$ ${precio_compra}</p>
                                        <p>$ ${(precio_compra*descuento).toFixed(2)}</p>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-around">
                                        <p>$ ${precio_venta}</p>
                                        <p>$ ${(precio_venta*descuento).toFixed(2)}</p>
                                    </li>
                                </ul>
                            
                            </span>
                            <div class="card-body list-group ">
                                <div class="text-center">
                                    <p class="card-text">Categorias</p>
                                    
                                    <button class="btn  bg-principal mb-2" type="button">Categoria1</button>
                                    <button class="btn  bg-principal mb-2" type="button">Categoria2</button>
                                    <button class="btn  bg-principal mb-2" type="button">Categoria3</button>
                                    <button class="btn  bg-principal mb-2" type="button">Categoria4</button>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="modalmuestraProducto" tabindex="-1" aria-labelledby="modalmuestraProductoContent"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header  bg-principal">
                                        <h1 class="modal-title fs-5" id="modalmuestraProductoContent">Descripcion del producto</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
        `
    });

    
};

/* 
//Insert
const formulario = document.querySelector("#formAddPremios");
formulario.addEventListener("submit", insertPremio);

function insertPremio(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const descripcion = document.querySelector("#descripcion").value;
  const ganador = document.querySelector("#ganador").value;
  const equipo = document.querySelector("#descripcion").value;

  const registro = {
    nombre,
    descripcion,
    ganador,
    equipo
  };


  if (validation(registro)) {
    alert("Todos los datos son obligatorios");
  }
  alert("Datos guardados correctamente.");
  return addPremio(registro);
};

function validation(Objeto) {
  return !Object.values(Objeto).every((element) => element !== "");
};


//Delete
const eliminar = document.querySelector("main");
eliminar.addEventListener("click",borrar);

function borrar(e){
    if (e.target.classList.contains("eliminar")) {
        console.log(e.target);
        const idPremio = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar este Premio?");
        if (confir) {
            deletePremio(idPremio);
        }
    }
}


//Read One
const infoCategoria = document.querySelector("main");
infoCategoria.addEventListener("click",getInfo);

async function getInfo(e){
    if (e.target.classList.contains("update")) {
        const id = e.target.getAttribute("id");
        const informacion = await selectOne(id);

        const {_id,nombre,descripcion,ganador, equipo} = informacion;

        const nombreEdit = document.querySelector('#nombreEdit');
        const descripcionEdit = document.querySelector('#descripcionEdit');
        const ganadorEdit = document.querySelector('#ganadorEdit');
        const equipoEdit = document.querySelector('#equipoEdit');
        const idEdit = document.querySelector('#idEdit');

        nombreEdit.value = nombre;
        descripcionEdit.value = descripcion;
        ganadorEdit.value = ganador;
        equipoEdit.value = equipo;
        idEdit.value = _id;
    }
};


//Update
const formEdit = document.querySelector("#formEditPremio");
formEdit.addEventListener('submit',actualizar)

function actualizar(e){
    e.preventDefault();
    const id = document.querySelector('#idEdit').value;
    const nombre = document.querySelector('#nombreEdit').value;
    const descripcion = document.querySelector('#descripcionEdit').value;
    const ganador = document.querySelector('#ganadorEdit').value;
    const equipo = document.querySelector('#equipoEdit').value;

    const datos ={
        nombre,
        descripcion,
        ganador,
        equipo
    }

    alert('Datos editados correctamente');

    return updatePremio(datos,id);
}; */