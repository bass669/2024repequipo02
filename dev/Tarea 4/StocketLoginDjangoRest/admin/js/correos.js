document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona el botón de inicio de sesión
    const loginButton = document.querySelector('button[type="submit"]');
    const signUpButton = document.querySelector('a[href="#!"]'); 

    // Añade un evento de 'click' al botón de inicio de sesión
    loginButton.addEventListener('click', (event) => {
        // Previene el comportamiento por defecto del formulario
        event.preventDefault(); 

        // Obtiene los valores de los campos de correo electrónico y contraseña
        const email = document.getElementById('typeEmailX').value;
        const password = document.getElementById('typePasswordX').value;

        // Verifica si los campos están vacíos
        if(email && password) {
            console.log('Inicio de sesión exitoso');
            window.location.href = 'plantilla/AdminLTE-3.2.0/index.html';
            
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
    
});
