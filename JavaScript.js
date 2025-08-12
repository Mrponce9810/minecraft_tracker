// Espera a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', function () {
  
  // Selecciona todos los botones del menú
  const menuButtons = document.querySelectorAll('.menu-button');

  // Añade un evento de 'click' a cada botón
  menuButtons.forEach(button => {
    button.addEventListener('click', () => {
      // El contenido a mostrar/ocultar es el siguiente elemento después del botón
      const content = button.nextElementSibling;
      
      // Alterna la clase 'active' en el contenido
      // El CSS se encarga de mostrarlo u ocultarlo con una animación
      content.classList.toggle('active');

      // Opcional: Cerrar otros menús abiertos
      // Descomenta el siguiente bloque si quieres que solo un menú esté abierto a la vez
      /*
      document.querySelectorAll('.menu-content').forEach(otherContent => {
        if (otherContent !== content) {
          otherContent.classList.remove('active');
        }
      });
      */
    });
  });

});