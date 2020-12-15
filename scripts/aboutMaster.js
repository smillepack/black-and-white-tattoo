class Master{
    constructor(name, vk, instagram, img) {
        this.name = name
        this.vk = vk 
        this.instagram = instagram
        this.img = img
    }
}

const masters = {
    'Артем' : new Master('Артем', 'https://vk.com/art_joker_tattoo', "https://www.instagram.com/art.joker13/", './images/artJoker/'),
    'Аня' : new Master('Аня',   'https://vk.com/id170887739', "https://www.instagram.com/anya_naumchik_pm/",   './images/@anya_naumchik_pm/'),
    'Ольга' : new Master('Ольга', 'https://vk.com/id11654182', "https://www.instagram.com/tattoo_himera/",     './images/@tattoo_himera/'),
    'Паша' : new Master('Паша', 'https://vk.com/id346394885', "https://www.instagram.com/pasha.konstantinov/", './images/pashaKonstantinov/'),
    'Шура' : new Master('Шура', 'https://vk.com/inkovtsov', "https://www.instagram.com/inkovtsov/",            './images/@inkovtsov/'),
}


let buttons = [...document.querySelectorAll('.masterButton')]

buttons.forEach(el => el.addEventListener('click', handleAboutMaster, el))


function handleAboutMaster(e) {
    masterDiv(e.target.dataset.name)
}

function masterDiv(name) {
    let aboutMaster = document.getElementById('aboutMaster')
    aboutMaster.style.top = window.pageYOffset + 'px'
    // aboutMaster.style.height = document.documentElement.clientHeight + 'px'
    aboutMaster.classList.add('visibility')

    let aboutMImg = document.getElementById('aboutMImg')
    aboutMImg.src = masters[name].img + '0.jpg'

    let aboutMName = document.getElementById('aboutMName')
    aboutMName.innerHTML = name

    let aboutMLinkVk = document.getElementById('aboutMLinkVk')
    aboutMLinkVk.href = masters[name].vk

    let aboutMLinkInst = document.getElementById('aboutMLinkInst')
    aboutMLinkInst.href = masters[name].instagram

    let aboutMGallery = document.getElementById('aboutMGallery')
    aboutMGallery.innerHTML = ''
    for (let i = 1; i <= 4; i++) {
        let img = document.createElement('img')
        img.src = masters[name].img + i + '.jpg'
        aboutMGallery.append(img)
    }

    let aboutMMore = document.getElementById('aboutMMore')
    aboutMMore.href = masters[name].instagram
    document.body.classList.add('scrollOff')
}

