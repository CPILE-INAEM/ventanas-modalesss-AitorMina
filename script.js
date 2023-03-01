const modalButtons = document.querySelectorAll('.show-modal')
const closeModalButton = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

// Mostar ventana modal
function showModal() {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

// Ocultar la ventana modal
function hideModal() {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

// Añadir listener para los botones que muestran la ventana modal
modalButtons.forEach((button) => button.addEventListener('click', showModal))

// Añadir listener para el botón que cierra la ventana modal
closeModalButton.addEventListener('click', hideModal)

// Añadir listener para la tecla 'Escape'
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal()
  }
  event.stopPropagation
})
