

import { login } from "./API.js";
    const formulario = document.querySelector('#btnInicioSecion');
    formulario.addEventListener('submit', validateLogin);

    async function validateLogin(event) {
        event.preventDefault();
        const email = document.querySelector('#emailInicioSeccion').value;
        const password = document.querySelector('#passwordInicioSeccion').value;
    
        const datos = {
            email,
            password
        };
    
        try {
            const response = await login(datos);
            if (response.success) {
                await Swal.fire({
                    icon: 'success',
                    title: 'Iniciando Sesion',
                  })
                  localStorage.setItem('token', response.token);
                window.location.href = 'index.html';
           }
        } catch (error) {
            Swal.fire({
                title: '¡Error!',
                text: 'Email o Contraseña incorrecta',
                icon: 'error',
                confirmButtonText: 'Close'
              })
        }
    }