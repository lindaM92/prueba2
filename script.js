// Función para mostrar el mensaje de bienvenida
function mostrarBienvenida() {
    alert("¡Bienvenido a mi página interactiva!");
  }
  
  // Función para alternar entre el tema claro y oscuro
  function alternarTema() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelector("footer").classList.toggle("dark-mode");
  }
  
  // Función para manejar el envío del formulario
  function enviarFormulario(event) {
    event.preventDefault(); // Evita el envío real del formulario
    document.getElementById("mensajeEnviado").style.display = "block"; // Muestra el mensaje de confirmación
    document.getElementById("nombre").value = ""; // Limpia el campo de nombre
    document.getElementById("mensaje").value = ""; // Limpia el campo de mensaje
  }
  