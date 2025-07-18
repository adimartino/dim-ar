(function() {
  emailjs.init("cdzSdlBBL-vIR8Ap_");
})();

const form = document.getElementById('formularioContacto');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    email: form.email.value,
    telefono: form.telefono.value,
    razon: form.razon.value,
    mensaje: form.mensaje.value
  };

  emailjs.send("service_trmzj8d", "template_416bwl6", formData)
   .then(() => {
  form.reset();
  cerrarFormulario();
  mostrarPopupExito();
})
    .catch(error => {
      console.error("Error al enviar el formulario", error);
      alert("Hubo un error al enviar el mensaje. Intentá nuevamente más tarde.");
    });
});

function abrirFormulario() {
  document.getElementById("formContacto").style.display = "flex";
}

function cerrarFormulario() {
  document.getElementById("formContacto").style.display = "none";
}

function mostrarPopupExito() {
  const popup = document.getElementById("popupExito");
  popup.style.display = "flex";

  setTimeout(() => {
    popup.style.display = "none";
  }, 3000); // se oculta después de 3 segundos
}