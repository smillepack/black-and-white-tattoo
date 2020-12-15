let images = [...document.querySelectorAll('.galEl > img')]
let galleryEl = [...document.querySelectorAll('.galEl')]

function some() {
    let width = images[0].clientWidth + 'px'
    galleryEl.forEach(el => el.style.height = width)

    images.forEach(el => {
        el.style.height = width
    })
}

some()

window.addEventListener('resize', some)