// document.addEventListener('DOMContentLoaded', (event) => {
//     // Selecciona el botón de inicio de sesión
//     const loginButton = document.querySelector('button[type="submit"]');
//     const signUpButton = document.querySelector('a[href="#!"]'); 

//     // Añade un evento de 'click' al botón de inicio de sesión
//     loginButton.addEventListener('click', (event) => {
//         // Previene el comportamiento por defecto del formulario
//         event.preventDefault(); 

//         // Obtiene los valores de los campos de correo electrónico y contraseña
//         const email = document.getElementById('typeEmailX').value;
//         const password = document.getElementById('typePasswordX').value;

//         // Verifica si los campos están vacíos
//         if(email && password) {
//             console.log('Inicio de sesión exitoso');
//             window.location.href = 'index.html';
            
//         } else {
//             alert('Por favor, completa todos los campos.');
//         }
//     });
    
// });

document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona el botón de crear cuenta
    const createAccountButton = document.querySelector('button[type="submit"]');

    // Añade un evento de 'click' al botón de crear cuenta
    createAccountButton.addEventListener('click', (event) => {
        // Previene el comportamiento por defecto del formulario
        event.preventDefault();

        // Obtiene los valores de los campos de correo electrónico, contraseña y confirmación de contraseña
        const email = document.getElementById('typeEmailX').value;
        const password = document.getElementById('typePasswordX').value;
        const confirmPassword = document.getElementById('typeConfirmPasswordX').value;

        // Verifica si los campos están vacíos
        if (!email || !password || !confirmPassword) {
            alert('Por favor, completa todos los campos.');
        } else if (password !== confirmPassword) {
            // Verifica si las contraseñas coinciden
            alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        } else {
            // Aquí puedes agregar la lógica para crear la cuenta...
            console.log('Cuenta creada exitosamente');
            // Redirige al usuario a la página de inicio o a la que consideres adecuada
            window.location.href = 'index.html';
        }
    });
});
