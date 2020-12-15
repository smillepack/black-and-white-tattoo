let burgerMenu = document.getElementById('burgerMenu')
let burgerContainer = document.getElementById('burgerContainer')

burgerMenu.addEventListener('click', () => {
    burgerContainer.classList.toggle('disnone')
})