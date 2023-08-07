import { add, del, one, all, upd } from "./api.js";
/* formulario de producto para inglesar la categorias */
document.addEventListener("DOMContentLoaded", () => {
    loadcategoria();
    loadcategoriaSelect();
    eliminarBtnCategoriaCard();
    contnedorEliminar();
});

export async function loadcategoriaSelect() {
    const categorias = await all();
    const contenedor = document.querySelectorAll("#SelectAddCategoria");
    contenedor.forEach(element => {
        categorias.forEach((categoria) => {
            const { tipo, _id } = categoria;
            element.innerHTML += `
            <option value="${tipo}">${tipo}</option>
            `
        });
    });

}
const SelectAddCategoria = document.querySelectorAll("#SelectAddCategoria")
SelectAddCategoria.forEach(element => {
    element.addEventListener("change", cargarSelecionados)
});
export function cargarSelecionados(event) {

    const contenedor = document.querySelectorAll("#contendorSelectSelecionados");
    contenedor.forEach(element => {
        element.innerHTML += `
        <button class="btn bg-principal mb-2 btnCategoriaElegida" type="button">${event.target.value}</button>
        `
        contnedorEliminar()
    });

}


function contnedorEliminar() {
    const SelectAddCategoria = document.querySelectorAll("#SelectAddCategoria")
    SelectAddCategoria.forEach(element => {
        element.addEventListener("change", cargarSelecionados)
    });
    const btnAEliminarCategoria = document.querySelectorAll(".btnCategoriaElegida")
    btnAEliminarCategoria.forEach(element => {
        element.addEventListener("click", eliminarBtnCategoriar)
    });
}

function eliminarBtnCategoriar(event) {
    event.target.remove()

}
/* vaciar el contnedor de agregar produtos */
document.querySelector('#btnAgregarProducto').addEventListener("click", vaciarContenedor)
function vaciarContenedor() {
    const contenedor = document.querySelector("#contendorSelectSelecionados");
    contenedor.innerHTML = ""
}
/* eliminar las categorias seleccionadas */
function eliminarBtnCategoriaCard() {
    const updProducto = document.querySelectorAll(".updProducto")
    updProducto.forEach(element => {

        element.addEventListener("click", contnedorEliminar)

    });
}


//Read
async function loadcategoria() {
    const categorias = await all();
    const contenedor = document.querySelector("#contenedorcategorias");
    categorias.forEach((categoria) => {
        const { tipo, _id } = categoria;
        contenedor.innerHTML += `
        <li class="list-group-item list-group-item-action d-flex justify-content-between">
            <div class="ms-2">
                ${tipo}
            </div>
            <div>
                <span class="badge bg-principal text-dark rounded-pill">14</span>
                <i class="fa text-danger fa-times deleteCategorias" id="${_id}"></i>
            </div>
        </li>
        `
    });
};


//Insert
const formAddCategoria = document.querySelector("#formAddCategoria");
formAddCategoria.addEventListener("submit", insertCategoria);

function insertCategoria(e) {
    e.preventDefault();
    const tipo = document.querySelector("#tipoCateforiaInput").value;

    const registro = {
        tipo
    };


    if (validation(registro)) {

        alert("Todos los datos son obligatorios");
    } else {
        alert("Datos guardados correctamente.");
        return add(registro);
    }

};

function validation(Objeto) {
    return !Object.values(Objeto).every((element) => element !== "");
};


//Delete
const eliminar = document.querySelector("#contenedorcategorias");
eliminar.addEventListener("click", borrar);

function borrar(e) {
    if (e.target.classList.contains("deleteCategorias")) {
        const id = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar esta Categoria?");
        if (confir) {
            del(id);
        }
    }
}

