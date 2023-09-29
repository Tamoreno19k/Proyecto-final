const $returnBtn = document.querySelector('[data-return-button]')

$returnBtn.addEventListener('click', (event) => {
    event.preventDefault()
    window.history.back()
})