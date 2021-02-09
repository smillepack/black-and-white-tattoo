const sliderImgs = [...document.querySelectorAll('.slider-container__el')]
const sliderBtns = [...document.querySelectorAll('.slider-btns__el')]
const sliderIndicator = [...document.querySelectorAll('.slider-indecate__el > div')]
let current = 2
let length = sliderImgs.length

sliderImgs.forEach(el => {
    el.style.display = 'none'
})

sliderBtns[0].addEventListener('click', () => {
    sliderChangeImg(-1)
})

sliderBtns[1].addEventListener('click', () => {
    sliderChangeImg(+1)
})

sliderIndicator.forEach((el, index) => {
    el.addEventListener('click', () => {
        sliderImg(index)
        console.log('hi')
    })
})

function sliderImg(val) {
    sliderImgs[current].style.display = 'none'
    sliderIndicator[current].style.backgroundColor = '#b9b9b9'

    current = val

    sliderImgs[val].style.display = 'flex'
    sliderIndicator[val].style.backgroundColor = '#f1d43c'
}

sliderChangeImg(1)

function sliderChangeImg(val) {
    sliderImgs[current].style.display = 'none'
    sliderIndicator[current].style.backgroundColor = '#b9b9b9'

    if (val > 0) current++;
    else         current--;

    if (current  > length - 1) current = 0
    else if (current < 0) current = length - 1

    sliderImgs[current].style.display = 'flex'
    sliderIndicator[current].style.backgroundColor = '#f1d43c'
}