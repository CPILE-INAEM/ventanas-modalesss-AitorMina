const modalButtons = document.querySelectorAll('.show-modal')

modalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    const overlay = document.querySelector('.overlay')
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  })
})
