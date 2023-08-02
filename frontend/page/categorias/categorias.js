import { add,del,one,all,upd } from "./api.js";

document.addEventListener("DOMContentLoaded", ()=>{
    loadcategoria();
});


//Read
async function loadcategoria() {
    const categorias = await all();
    const contenedor = document.querySelector("#contenedorcategorias");
    categorias.forEach((categoria) => {
        const {tipo}=categoria;
        contenedor.innerHTML+=`
        <li class="list-group-item list-group-item-action d-flex justify-content-between">
            <div class="ms-2">
                ${tipo}
            </div>
            <span class="badge bg-principal text-dark rounded-pill">14</span>
        </li>
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