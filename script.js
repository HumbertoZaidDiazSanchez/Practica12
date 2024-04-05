// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del formulario y otros elementos necesarios
    const form = document.getElementById('registroForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    const tipoEntradaSelect = document.getElementById('tipoEntrada');
    const mensajeError = document.getElementById('mensajeError');
    const mensajeExito = document.createElement('div'); // Crear elemento para mensaje de éxito
    mensajeExito.className = 'mensaje-exito'; // Agregar clase para estilos en CSS
  
    // Agregar evento de envío al formulario
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar envío automático del formulario
      // Validar campos antes de enviar el formulario
      if (!validarCampos()) {
        mensajeError.textContent = 'Por favor complete todos los campos correctamente.';
      } else {
        mensajeError.textContent = ''; // Limpiar mensaje de error si existe
        mostrarMensajeExito(); // Mostrar mensaje de éxito
        resetearCampos(); // Restablecer campos del formulario
      }
    });
  
    // Función para validar los campos del formulario
    function validarCampos() {
      if (
        nombreInput.value.trim() === '' || // Nombre vacío
        emailInput.value.trim() === '' || // Email vacío
        !validarEmail(emailInput.value.trim()) || // Email no válido
        telefonoInput.value.trim() === '' || // Teléfono vacío
        telefonoInput.value.trim().length !== 10 || // Validar que tenga exactamente 10 dígitos
        tipoEntradaSelect.value === '' // Tipo de entrada no seleccionado
      ) {
        return false; // Campos no válidos
      }
      return true; // Todos los campos son válidos
    }
  // Función para validar el formato del email
    function validarEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  // Función para mostrar mensaje de éxito
    function mostrarMensajeExito() {
      mensajeExito.textContent = 'Regristro enviado correctamente'; // Mensaje de éxito
      form.appendChild(mensajeExito); // Agregar mensaje al formulario
      setTimeout(function() {
        mensajeExito.textContent = ''; // Limpiar mensaje después de unos segundos
      }, 5000); // Mostrar mensaje por 5 segundos
    }
  // Función para restablecer campos del formulario
    function resetearCampos() {
      form.reset(); // Restablecer todos los campos del formulario
    }
  });