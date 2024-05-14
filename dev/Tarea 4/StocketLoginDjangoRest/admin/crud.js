document.addEventListener('DOMContentLoaded', () => {
    let contadorEmpleados = 1;
    const tablaEmpleados = document.querySelector('table');
  
    // Función para crear una fila de empleado vacía
    function crearFilaEmpleado() {
      const fila = tablaEmpleados.insertRow();
      fila.innerHTML = `
        <td>${contadorEmpleados}</td>
        <td><input type="text" placeholder="Nombre"></td>
        <td><input type="text" placeholder="Apellido"></td>
        <td><input type="text" placeholder="Teléfono"></td>
        <td>
          <button class="boton boton-guardar">Guardar</button>
          <button class="boton boton-actualizar" style="display:none;">Actualizar</button>
          <button class="boton boton-eliminar">Eliminar</button>
        </td>
      `;
      
      agregarEventosGuardarActualizarEliminar(fila);
    }
  
    // Función para agregar eventos a los botones de guardar, actualizar y eliminar
    function agregarEventosGuardarActualizarEliminar(fila) {
      const botonGuardar = fila.querySelector('.boton-guardar');
      const botonActualizar = fila.querySelector('.boton-actualizar');
      const botonEliminar = fila.querySelector('.boton-eliminar');
  
      botonGuardar.addEventListener('click', () => {
        // Aquí puedes agregar tu lógica para guardar los datos del empleado
        console.log('Empleado guardado con ID:', fila.firstElementChild.textContent);
        contadorEmpleados++;
        // Deshabilitar los campos de entrada
        fila.querySelectorAll('input').forEach(input => input.disabled = true);
        // Mostrar el botón de actualizar y ocultar el de guardar
        botonActualizar.style.display = 'inline';
        botonGuardar.style.display = 'none';
      });
  
      botonActualizar.addEventListener('click', () => {
        // Habilitar los campos de entrada para edición
        fila.querySelectorAll('input').forEach(input => input.disabled = false);
        // Mostrar el botón de guardar y ocultar el de actualizar
        botonGuardar.style.display = 'inline';
        botonActualizar.style.display = 'none';
      });
  
      botonEliminar.addEventListener('click', () => {
        fila.remove();
        console.log('Empleado eliminado');
      });
    }
  
    // Evento para el botón de agregar empleado
    document.querySelector('.boton-agregar').addEventListener('click', crearFilaEmpleado);
  });
  
  // Estilos adicionales para los botones
  document.addEventListener('DOMContentLoaded', () => {
    const estiloBotones = document.createElement('style');
    estiloBotones.innerHTML = `
      .boton-guardar {
        background-color: blue; /* Color azul para el botón guardar y actualizar */
        border-radius: 5px;
      }
      .boton-actualizar {
        background-color: green; /* Color rojo para el botón eliminar */
        border-radius: 5px;
      }
      .boton-eliminar {
        background-color: red; /* Color rojo para el botón eliminar */
        border-radius: 5px;
      }
    `;
    document.head.appendChild(estiloBotones);
  });
  