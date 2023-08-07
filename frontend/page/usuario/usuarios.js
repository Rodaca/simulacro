import { all } from "./api.js";


//Read
document.querySelector('#btnInicioSecion').addEventListener("submit",load)

async function load(e) {
    e.preventDefault();
    const usuarios = await all();
    const correoForm= document.querySelector("#emailInicioSeccion").value
    const passwordForm= document.querySelector("#passwordInicioSeccion").value
    usuarios.forEach((element) => {
        const {user,password,email,rol}=element;
        console.log(password,email);
        console.log(passwordForm,correoForm);
        if (correoForm===email && passwordForm===password) {
            window.location.href = "almacen.html"
        }
        
    });
    alert("contraseña o correo incorrecto pruebe usuario1@example.com y contraseña1")
}