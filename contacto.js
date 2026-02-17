const form = document.querySelector('.index-contacto-form');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('¡Gracias! Tu mensaje ha sido recibido. Te responderemos pronto.');
    form.reset();
  });
}