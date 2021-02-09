let images = [...document.querySelectorAll('.galEl')]

function some() {
    let width = images[0].clientWidth + 'px'

    images.forEach(el => {
        el.style.height = width
    })
}

some()

window.addEventListener('resize', some)