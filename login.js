// Variable para guardar qué debe hacer el botón "Aceptar"
let accionAlCerrar = null;

// Función para mostrar la tarjeta personalizada
function mostrarModal(titulo, mensaje, accion) {
  // 1. Ponemos el texto
  document.getElementById("modal-title").innerText = titulo;
  document.getElementById("modal-message").innerText = mensaje;

  // 2. Guardamos la acción (si hay redirección)
  accionAlCerrar = accion;

  // 3. Mostramos la tarjeta agregando la clase 'active'
  document.getElementById("custom-modal").classList.add("active");
}

// Función para cerrar la tarjeta
function cerrarModal() {
  // 1. Ocultamos la tarjeta
  document.getElementById("custom-modal").classList.remove("active");

  // 2. Si había una acción pendiente (como ir al Home), la ejecutamos
  if (accionAlCerrar) {
    accionAlCerrar();
    accionAlCerrar = null; // Limpiamos la acción
  }
}

// Lógica del Login
function validarLogin(event) {
  event.preventDefault();

  const passwordInput = document.getElementById("password").value;

  // VALIDACIÓN
  if (passwordInput.length >= 8) {
    // CASO ÉXITO:
    // Pasamos título, mensaje y una función para redirigir
    mostrarModal(
      "¡Bienvenido!",
      "Acceso concedido al Jardín. Preparando tu espacio...",
      function () {
        window.location.href = "home.html";
      }
    );
  } else {
    // CASO ERROR:
    // Solo mostramos mensaje, sin función de redirección
    mostrarModal(
      "Contraseña inválida",
      "La contraseña es muy corta. Por seguridad, debe tener al menos 8 caracteres.",
      null
    );
    // Opcional: limpiar campo
    // document.getElementById("password").value = "";
  }

  return false;
}
