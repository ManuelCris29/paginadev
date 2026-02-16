// ============================================
// VIDEO MODAL - CONTROLADOR DE MODAL
// ============================================
// 
// Este script maneja la apertura y cierre del modal de video
// Siguiendo mejores prácticas de UX y accesibilidad
// 
// Autor: TalentDev
// Fecha: 2025
//

// ============================================
// INICIALIZACIÓN - Esperar a que el DOM esté listo
// ============================================
// 
// DOMContentLoaded: Evento que se dispara cuando el HTML está completamente cargado.
// Es mejor que usar window.onload porque no espera imágenes/videos.
// Esto asegura que los elementos existan antes de intentar acceder a ellos.
//
document.addEventListener('DOMContentLoaded', function() {
  // 
  // Función anónima que se ejecuta cuando el DOM está listo.
  // Todo el código va dentro de esta función para evitar errores.
  //

  // ============================================
  // OBTENER REFERENCIAS A LOS ELEMENTOS DEL DOM
  // ============================================
  
  const videoTrigger = document.getElementById('video-trigger');
  // 
  // videoTrigger: Botón que abre el modal
  // getElementById: Método nativo del DOM para obtener un elemento por su ID
  // Retorna null si el elemento no existe (importante verificar)
  //

  const videoModal = document.getElementById('video-modal');
  // videoModal: El elemento <dialog> que contiene el modal

  const videoElement = document.getElementById('talentdev-video');
  // videoElement: El elemento <video> que reproduce el video

  // Verificar que los elementos existan antes de continuar
  // 
  // Esta validación previene errores si falta algún elemento en el HTML.
  // Es una buena práctica de programación defensiva.
  //
  if (!videoTrigger || !videoModal || !videoElement) {
    console.warn('Algunos elementos del modal de video no se encontraron.');
    // 
    // console.warn: Muestra una advertencia en la consola sin detener la ejecución.
    // Útil para debugging sin romper la aplicación.
    //
    return; // Salir de la función si faltan elementos
  }

  const closeButton = videoModal.querySelector('.video-modal-close');
  // closeButton: Botón de cerrar dentro del modal
  // querySelector: Busca el primer elemento que coincida con el selector CSS
  // Retorna null si no encuentra el elemento

  const backdrop = videoModal.querySelector('.video-modal-backdrop');
  // backdrop: El overlay oscuro detrás del modal

  // ============================================
  // FUNCIONES DE CONTROL DEL MODAL
  // ============================================

  /**
   * Abre el modal de video y reproduce el video automáticamente
   * 
   * Esta función se ejecuta cuando el usuario hace clic en el botón de video.
   * Maneja la apertura del modal, reproducción del video y bloqueo del scroll.
   */
  function openVideoModal() {
    // 
    // function: Declara una función con nombre.
    // Las funciones con nombre son más fáciles de debuggear que las anónimas.
    //

    videoModal.showModal();
    // 
    // showModal(): Método nativo de <dialog> que abre el modal.
    // Ventajas sobre mostrar/ocultar con CSS:
    // - Maneja automáticamente el foco (accesibilidad)
    // - Previene interacción con el contenido de fondo
    // - Maneja la tecla ESC automáticamente
    //

    // Reproducir el video automáticamente al abrir
    videoElement.play().catch(error => {
      // 
      // play(): Método para iniciar la reproducción del video.
      // Retorna una Promise que puede fallar (ej: políticas de autoplay del navegador).
      // catch(): Maneja errores sin romper la aplicación.
      //
      console.log('No se pudo reproducir automáticamente:', error);
      // 
      // console.log: Para debugging (solo visible en la consola del navegador).
      // No afecta la experiencia del usuario si falla el autoplay.
      // Algunos navegadores bloquean el autoplay por políticas de UX.
      //
    });

    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
    // 
    // overflow: hidden: Oculta la barra de scroll y previene el scroll del fondo.
    // Mejora la UX al evitar que el usuario haga scroll accidentalmente.
    // document.body: Accede al elemento <body> del documento.
    // style.overflow: Modifica la propiedad CSS overflow directamente.
    //
  }

  /**
   * Cierra el modal de video, pausa y reinicia el video
   * 
   * Esta función se ejecuta cuando el usuario cierra el modal.
   * Asegura que el video no siga reproduciéndose en segundo plano.
   */
  function closeVideoModal() {
    // 
    // Esta función se ejecuta cuando el usuario cierra el modal
    //

    videoElement.pause();
    // 
    // pause(): Detiene la reproducción del video.
    // Importante para UX: el video no sigue reproduciéndose en segundo plano.
    // También ahorra recursos del navegador.
    //

    videoElement.currentTime = 0;
    // 
    // currentTime: Posición actual del video en segundos.
    // Establecerlo en 0 reinicia el video al inicio.
    // Si el usuario vuelve a abrir, empieza desde el principio.
    // Esto mejora la experiencia al permitir ver el video completo cada vez.
    //

    videoModal.close();
    // 
    // close(): Método nativo de <dialog> que cierra el modal.
    // Restaura el foco al elemento que lo abrió (accesibilidad).
    // Esto es importante para usuarios que navegan con teclado.
    //

    // Restaurar scroll del body
    document.body.style.overflow = '';
    // 
    // Restaurar el overflow a su valor por defecto (vacío = valor inicial).
    // Permite que el usuario vuelva a hacer scroll normalmente.
    // Es importante restaurar esto para no romper la navegación.
    //
  }

  // ============================================
  // EVENT LISTENERS (Escuchadores de eventos)
  // ============================================
  // 
  // Los event listeners "escuchan" cuando ocurre un evento (click, tecla, etc.)
  // y ejecutan una función en respuesta.
  // Es la forma moderna y recomendada de manejar eventos en JavaScript.
  //

  // Abrir modal al hacer clic en el botón de video
  videoTrigger.addEventListener('click', openVideoModal);
  // 
  // addEventListener: Método para registrar un listener de eventos.
  // 'click': Tipo de evento (click del mouse o toque en móvil).
  // openVideoModal: Función que se ejecuta cuando ocurre el evento.
  // Ventaja: Puedes tener múltiples listeners para el mismo evento.
  //

  // Cerrar modal al hacer clic en el botón de cerrar
  if (closeButton) {
    // 
    // Verificar que el botón exista antes de agregar el listener.
    // Previene errores si el HTML no tiene el botón.
    //
    closeButton.addEventListener('click', closeVideoModal);
    // 
    // Cuando el usuario hace clic en la X, se cierra el modal.
    //
  }

  // Cerrar modal al hacer clic en el backdrop (overlay oscuro)
  if (backdrop) {
    // Verificar que el backdrop exista
    backdrop.addEventListener('click', closeVideoModal);
    // 
    // UX estándar: hacer clic fuera del contenido cierra el modal.
    // Mejora la usabilidad (patrón familiar para los usuarios).
    // Es una convención esperada en interfaces modernas.
    //
  }

  // Cerrar modal con la tecla ESC
  videoModal.addEventListener('cancel', closeVideoModal);
  // 
  // 'cancel': Evento nativo de <dialog> que se dispara con ESC.
  // Mejor que escuchar 'keydown' porque es específico del elemento dialog.
  // El navegador maneja automáticamente la tecla ESC para <dialog>.
  //

  // Prevenir que el clic en el contenido del modal lo cierre
  const modalContent = videoModal.querySelector('.video-modal-content');
  if (modalContent) {
    // Verificar que el contenido exista
    modalContent.addEventListener('click', function(e) {
      // 
      // querySelector: Busca el contenedor del contenido del modal.
      // function(e): Función anónima que recibe el evento como parámetro.
      // (e): El objeto evento que contiene información sobre el click.
      //
      e.stopPropagation();
      // 
      // stopPropagation(): Detiene la propagación del evento.
      // Sin esto, el clic en el contenido también cerraría el modal (no queremos eso).
      // Los eventos "burbujean" desde el elemento hijo al padre.
      // stopPropagation() evita que el evento llegue al backdrop.
      //
    });
  }

}); // Fin de DOMContentLoaded

// ============================================
// NOTAS ADICIONALES
// ============================================
// 
// - Este código usa JavaScript vanilla (sin librerías).
// - Es compatible con todos los navegadores modernos.
// - Sigue las mejores prácticas de accesibilidad (WCAG).
// - El código está comentado para facilitar el aprendizaje.
// 
// Para usar este script:
// 1. Asegúrate de que el HTML tenga los elementos con los IDs correctos.
// 2. Incluye este archivo antes de cerrar </body> en el HTML.
// 3. El script se ejecutará automáticamente cuando el DOM esté listo.
//


