
import { filter } from "../search/api.js";
import { add, del, one, all, upd } from "./api.js";


document.addEventListener("DOMContentLoaded", () => {
    loadproducto();

    getInfo(e);

});


const contenedor = document.querySelector("#contenedorProductos");
//Read
async function loadproducto() {
    const productos = await all();

    const descuento = 0.75
    productos.forEach((producto) => {
        const { _id, nombre, foto, marca, codigo, precio_compra, precio_venta, categorias, descripcion, cantidad } = producto;
        let totalCategorias = "";
        categorias.forEach(element => {
            totalCategorias +=
                `<button class="btn  bg-principal mb-2" type="button">${element}</button>
            `
        })
        contenedor.innerHTML += `
        <div class="card"  style="width: 18rem;">
            <div class="d-flex">
                <img src="../img/defaul.jpg" style="width: 14rem;" class="card-img-top" alt="..." data-bs-toggle="modal" data-bs-target="#modalmuestraProducto${codigo}">
                <div class="d-flex flex-column justify-content-center gap-2 p-1">
                <!-- <button type="button" class="btn btn-outline-dark">
                        <i class="fa fa-plus"></i> -->
                    </button>
                    <span class="text-center">Total</span>
                    <span class="text-center">${cantidad}</span>
                    <!-- <button type="button" class="btn btn-outline-dark">
                        <i class="fa fa-minus"></i>
                    </button> -->
                    <button type="button"  id="${_id}" class="btn btn-outline-warning updProducto" data-bs-toggle="modal" data-bs-target="#modalUpdProducto">
                        <i class="fas fa-pencil"></i>
                    </button>
                    <button type="button" id="${_id}" class="btn btn-outline-danger delProducto">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            </div>
            <span data-bs-toggle="modal" data-bs-target="#modalmuestraProducto${codigo}">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5> 
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${marca}</li>
                    <li class="list-group-item">Codigo: ${codigo}</li>
                    <li class="list-group-item d-flex justify-content-around">
                        <p>$ ${precio_compra}</p>
                        <p>$ ${precio_compra * descuento}</p>
                    </li>
                    <li class="list-group-item d-flex justify-content-around">
                        <p>$ ${precio_venta}</p>
                        <p>$ ${precio_venta * descuento}</p>
                    </li>
                </ul>
            
            </span>
            <div class="card-body list-group ">
                <div class="text-center">
                    <p class="card-text contenedorTotalCategoria">Categorias</p>
                    ${totalCategorias}
                </div>
            </div>
        </div>
        <div class="modal fade" id="modalmuestraProducto${codigo}" tabindex="-1" aria-labelledby="modalmuestraProductoContent"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header  bg-principal">
                        <h1 class="modal-title fs-5" id="modalmuestraProductoContent">Descripcion del producto</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card-body">
                            <h5 class="card-title">${nombre}</h5> 
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${marca}</li>
                            <li class="list-group-item">Codigo: ${codigo}</li>
                            <li class="list-group-item">${descripcion}</li>
                        </ul>
                        <div class="card-body list-group ">
                            <div class="text-center">
                                <p class="card-text">Categorias</p>
                                ${totalCategorias}
                            </div>
                        </div>
                    </div>
                    
                        
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modalUpdProducto" tabindex="-1" aria-labelledby="modalUpdProductoContent"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header  bg-principal">
                        <h1 class="modal-title fs-5" id="modalUpdProductoContent">Agregar un nuevo Producto</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="form-card formAddProducto"  data-producto_id="${_id}" id="formAddProducto" >
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-8 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Nombre del producto<span class="text-danger"> *</span></label> 
                                    <input class="form-control" type="text" id="nombrePro" name="nombrePro" placeholder=""> 
                                </div>
                                <div class="form-group col-4 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Cantidad</label> 
                                    <input class="form-control" type="text" id="cantidadPro" name="cantidadPro" placeholder=""> 
                                </div>
                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Marca<span class="text-danger"> *</span></label> 
                                    <input class="form-control" type="text" id="marcaPro" name="marcaPro" placeholder="">
                                </div>
                                <div class="form-group col-sm-6 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Codigo<span class="text-danger"> *</span></label> 
                                    <input class="form-control" type="text" id="codigoPro" name="codigoPro" placeholder=""> 
                                </div>
                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Precio Real<span class="text-danger"> *</span></label> 
                                    <input class="form-control" type="number" id="precio_compraPro" name="precio_compraPro" placeholder=""> 
                                </div>
                                <div class="form-group col-sm-6 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Precio Descuento<span class="text-danger"> *</span></label> 
                                    <input class="form-control" type="number" id="precio_ventaPro" name="precio_ventaPro" placeholder=""> 
                                </div>
                                
                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group mt-3">
                                    <input type="file" class="form-control" id="fotoPro">
                                </div>
                            </div>
                            
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-12 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Descripcion</label> 
                                    <textarea class="form-control" id="descripcionPro" rows="3"></textarea>
                                </div>
                                
                            </div>
                            
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-12 flex-column d-flex">
                                    <label class="form-control-label px-3">Categorias</label>
                                    <select class="form-select SelectAddCategoria" id="SelectAddCategoria" aria-label="Default select example">
                                        <option selected>Elija categoria</option>
                                        
                                    </select>
                                </div>
                            </div>
                            <div class="row justify-content-between text-left">
                                <div id="contendorSelectSelecionados" class="form-group pt-2">
                                    
                                </div>
                            </div>
                            <div class="modal-footer mt-2">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn bg-principal updateId" data-producto_id="${_id}">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `
    });


};


//Insert
const formulario = document.querySelector("#formAddProducto");
formulario.addEventListener("submit", insertproducto);
const totalCategoriasArray = [];
const contendorSelectSelecionadosNew = document.querySelector(".contendorSelectSelecionadosnew")
function contenedorCategoriaForm() {
    totalCategoriasArray.splice(0)


    const contendorSelectSelecionadosNewHijos = contendorSelectSelecionadosNew.querySelectorAll('.btn')
    contendorSelectSelecionadosNewHijos.forEach(element => {

        totalCategoriasArray.push(element.textContent)
    });


    return totalCategoriasArray
}
function insertproducto(e) {
    e.preventDefault();
    contenedorCategoriaForm()
    const nombre = document.querySelector("#nombreProductos").value;
    const cantidad = document.querySelector("#cantidadProductos").value;
    const marca = document.querySelector("#marcaProductos").value;
    const codigo = document.querySelector("#codigoProductos").value;
    const precio_compra = document.querySelector("#precio_compraProducots").value;
    const precio_venta = document.querySelector("#precio_ventaProductos").value;
    const foto = document.querySelector("#fotoProductos").value;
    const descripcion = document.querySelector("#descripcionProductos").value;
    const categorias = totalCategoriasArray;
    const registro = {
        nombre, marca, codigo, precio_compra, precio_venta
    };
    const registroSinVerificar = {
        nombre, foto, marca, codigo, precio_compra, precio_venta, descripcion, cantidad, categorias
    };
    if (validation(registro)) {
        alert("Todos los datos son obligatorios");
    } else {
        alert("Datos guardados correctamente.");
        return add(registroSinVerificar);
    }
};

function validation(Objeto) {
    return !Object.values(Objeto).every((element) => element !== "");
};


//Delete

contenedor.addEventListener("click", borrar);

function borrar(e) {

    if (e.target.classList.contains("delProducto")) {

        const id = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar este Producto?");
        if (confir) {
            del(id);
        }
    }
}


//Read One

contenedor.addEventListener("click", getInfo);

async function getInfo(e) {


    if (e.target.classList.contains("updProducto")) {
        const id = e.target.getAttribute("id");
        const informacion = await one(id);

        const { nombre, foto, marca, codigo, precio_compra, precio_venta, descripcion, cantidad, categorias } = informacion;

        const nombreEdit = document.querySelectorAll("#nombrePro");
        const cantidadEdit = document.querySelectorAll("#cantidadPro");
        const marcaEdit = document.querySelectorAll("#marcaPro");
        const codigoEdit = document.querySelectorAll("#codigoPro");
        const precio_compraEdit = document.querySelectorAll("#precio_compraPro");
        const precio_ventaEdit = document.querySelectorAll("#precio_ventaPro");
        const fotoEdit = document.querySelectorAll("#fotoPro");
        const descripcionEdit = document.querySelectorAll("#descripcionPro");
        const contenedorTotalCategoria = document.querySelectorAll("#contendorSelectSelecionados");
        const laid = document.querySelectorAll(".updateId");
        laid.forEach(element => {
            element.dataset.producto_id = id;
        });

        let totalCategorias = "";
        categorias.forEach(element => {
            totalCategorias +=
                `<button class="btn  bg-principal mb-2" type="button">${element}</button>
            `
        })

        nombreEdit.forEach(element => {
            element.value = nombre;
        });
        cantidadEdit.forEach(element => {
            element.value = cantidad;
        });
        marcaEdit.forEach(element => {
            element.value = marca;
        });
        codigoEdit.forEach(element => {
            element.value = codigo;
        });
        precio_compraEdit.forEach(element => {
            element.value = precio_compra;
        });
        precio_ventaEdit.forEach(element => {
            element.value = precio_venta;
        });
        fotoEdit.forEach(element => {
            element.value = foto;
        });
        descripcionEdit.forEach(element => {
            element.value = descripcion;
        });

        contenedorTotalCategoria.forEach(element => {
            element.innerHTML = totalCategorias;
        });




    }
};


//Update

const btnsUpd = document.querySelector("#contenedorProductos")

btnsUpd.addEventListener("click", (e) => {
    if (e.target.classList.contains('updProducto')) {
        actualizar()
    }
})



function actualizar() {
    const formContainers = document.querySelectorAll(".formAddProducto");
    formContainers.forEach(element => {

        element.addEventListener("submit", function (event) {
            event.preventDefault();

            const id = element.querySelector(".updateId").dataset.producto_id;
            const contnedorUpdCategorias = element.querySelector("#contendorSelectSelecionados");
            const contendorSelectSelecionadosNewHijos = contnedorUpdCategorias.querySelectorAll('.btn')
            contendorSelectSelecionadosNewHijos.forEach(element => {
                totalCategoriasArray.push(element.textContent)
            });


            const nombre = element.querySelector("#nombrePro").value;
            const cantidad = element.querySelector("#cantidadPro").value;
            const marca = element.querySelector("#marcaPro").value;
            const codigo = element.querySelector("#codigoPro").value;
            const precio_compra = element.querySelector("#precio_compraPro").value;
            const precio_venta = element.querySelector("#precio_ventaPro").value;
            const foto = element.querySelector("#fotoPro").value;
            const descripcion = element.querySelector("#descripcionPro").value;
            const categorias = totalCategoriasArray

            const registro = {
                nombre, marca, codigo, precio_compra, precio_venta
            };
            const registroSinVerificar = {
                nombre, foto, marca, codigo, precio_compra, precio_venta, descripcion, cantidad, categorias
            };


            if (validation(registro)) {
                alert("Todos los datos son obligatorios");
            } else {
                alert("Datos guardados correctamente.");

                return upd(registroSinVerificar, id);
            }

            event.preventDefault();
        });
    });

}

document.querySelector('#filter').addEventListener("click", loadfilter)
document.querySelector('#search').addEventListener("keyup", function(event) {
    console.log("si");
    if (event.key === "Enter") {
        loadfilter()
    }
  });

async function loadfilter() {
    
    const search = document.querySelector("#search").value
    const productos = await filter(search);
    const productosArray = productos.results

    contenedor.innerHTML = ""
    const descuento = 0.75
    productosArray.forEach(producto => {
        const { _id, nombre, foto, marca, codigo, precio_compra, precio_venta, categorias, descripcion, cantidad } = producto;
        let totalCategorias = "";
        categorias.forEach(element => {
            totalCategorias +=
                `<button class="btn  bg-principal mb-2" type="button">${element}</button>
            `
        })
        contenedor.innerHTML += `
        <div class="card"  style="width: 18rem;">
            <div class="d-flex">
                <img src="../img/defaul.jpg" style="width: 14rem;" class="card-img-top" alt="..." data-bs-toggle="modal" data-bs-target="#modalmuestraProducto${codigo}">
                <div class="d-flex flex-column justify-content-center gap-2 p-1">
                <!-- <button type="button" class="btn btn-outline-dark">
                        <i class="fa fa-plus"></i> -->
                    </button>
                    <span class="text-center">Total</span>
                    <span class="text-center">${cantidad}</span>
                    <!-- <button type="button" class="btn btn-outline-dark">
                        <i class="fa fa-minus"></i>
                    </button> -->
                    <button type="button"  id="${_id}" class="btn btn-outline-warning updProducto" data-bs-toggle="modal" data-bs-target="#modalUpdProducto">
                        <i class="fas fa-pencil"></i>
                    </button>
                    <button type="button" id="${_id}" class="btn btn-outline-danger delProducto">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            </div>
            <span data-bs-toggle="modal" data-bs-target="#modalmuestraProducto${codigo}">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5> 
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${marca}</li>
                    <li class="list-group-item">Codigo: ${codigo}</li>
                    <li class="list-group-item d-flex justify-content-around">
                        <p>$ ${precio_compra}</p>
                        <p>$ ${precio_compra * descuento}</p>
                    </li>
                    <li class="list-group-item d-flex justify-content-around">
                        <p>$ ${precio_venta}</p>
                        <p>$ ${precio_venta * descuento}</p>
                    </li>
                </ul>
            
            </span>
            <div class="card-body list-group ">
                <div class="text-center">
                    <p class="card-text contenedorTotalCategoria">Categorias</p>
                    ${totalCategorias}
                </div>
            </div>
        </div>
        <div class="modal fade" id="modalmuestraProducto${codigo}" tabindex="-1" aria-labelledby="modalmuestraProductoContent"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header  bg-principal">
                        <h1 class="modal-title fs-5" id="modalmuestraProductoContent">Descripcion del producto</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="card-body">
                            <h5 class="card-title">${nombre}</h5> 
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${marca}</li>
                            <li class="list-group-item">Codigo: ${codigo}</li>
                            <li class="list-group-item">${descripcion}</li>
                        </ul>
                        <div class="card-body list-group ">
                            <div class="text-center">
                                <p class="card-text">Categorias</p>
                                ${totalCategorias}
                            </div>
                        </div>
                    </div>
                    
                        
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modalUpdProducto" tabindex="-1" aria-labelledby="modalUpdProductoContent"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header  bg-principal">
                        <h1 class="modal-title fs-5" id="modalUpdProductoContent">Agregar un nuevo Producto</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="form-card formAddProducto"  data-producto_id="${_id}" id="formAddProducto" >
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-8 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Nombre del producto<span class="text-danger"> *</span></label> 
                                    <input class="form-control" type="text" id="nombrePro" name="nombrePro" placeholder=""> 
                                </div>
                                <div class="form-group col-4 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Cantidad</label> 
                                    <input class="form-control" type="text" id="cantidadPro" name="cantidadPro" placeholder=""> 
                                </div>
                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Marca<span class="text-danger"> *</span></label> 
                                    <input class="form-control" type="text" id="marcaPro" name="marcaPro" placeholder="">
                                </div>
                                <div class="form-group col-sm-6 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Codigo<span class="text-danger"> *</span></label> 
                                    <input class="form-control" type="text" id="codigoPro" name="codigoPro" placeholder=""> 
                                </div>
                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Precio Real<span class="text-danger"> *</span></label> 
                                    <input class="form-control" type="number" id="precio_compraPro" name="precio_compraPro" placeholder=""> 
                                </div>
                                <div class="form-group col-sm-6 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Precio Descuento<span class="text-danger"> *</span></label> 
                                    <input class="form-control" type="number" id="precio_ventaPro" name="precio_ventaPro" placeholder=""> 
                                </div>
                                
                            </div>
                            <div class="row justify-content-between text-left">
                                <div class="form-group mt-3">
                                    <input type="file" class="form-control" id="fotoPro">
                                </div>
                            </div>
                            
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-12 flex-column d-flex"> 
                                    <label class="form-control-label px-3">Descripcion</label> 
                                    <textarea class="form-control" id="descripcionPro" rows="3"></textarea>
                                </div>
                                
                            </div>
                            
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-12 flex-column d-flex">
                                    <label class="form-control-label px-3">Categorias</label>
                                    <select class="form-select SelectAddCategoria" id="SelectAddCategoria" aria-label="Default select example">
                                        <option selected>Elija categoria</option>
                                        
                                    </select>
                                </div>
                            </div>
                            <div class="row justify-content-between text-left">
                                <div id="contendorSelectSelecionados" class="form-group pt-2">
                                    
                                </div>
                            </div>
                            <div class="modal-footer mt-2">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn bg-principal updateId" data-producto_id="${_id}">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `
    });


};
