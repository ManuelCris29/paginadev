/*
const botonesAplicar = document.querySelectorAll('.empleos-apply-button');

botonesAplicar.forEach(boton => {
  boton.addEventListener('click', function() {
    boton.textContent = 'Aplicado';
    boton.classList.add('empleos-apply-button-applied');
    boton.disabled = true;
    
  });
});

*/

const jobsListingSection = document.querySelector('.empleos-jobs-container')

jobsListingSection?.addEventListener('click', function(event) {
  const element=event.target;
  if (element.classList.contains('empleos-apply-button')) {
    element.textContent = 'Aplicado';
    element.classList.add('empleos-apply-button-applied');
    element.disabled = true;
  }
});

