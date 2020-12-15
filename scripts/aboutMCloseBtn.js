let aboutMCloseBtn = document.querySelector('.aboutMCloseBtn')
let aboutMaster = document.getElementById('aboutMaster')

aboutMCloseBtn.addEventListener('click', () => {
    aboutMaster.classList.remove('visibility')
    document.body.classList.remove('scrollOff')
})