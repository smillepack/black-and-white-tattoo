const masters = [
    new Master('Артем', 'https://vk.com/art_joker_tattoo', "https://www.instagram.com/art.joker13/", '../images/artJoker/0.jpg'),
    new Master('Аня',   'https://vk.com/id170887739', "https://www.instagram.com/anya_naumchik_pm/", '../images/@anya_naumchik_pm/0.jpg'),
    new Master('Ольга', 'https://vk.com/id11654182', "https://www.instagram.com/tattoo_himera/", '../images/@tattoo_himera/0.jpg'),
    new Master('Паша', 'https://vk.com/id346394885', "https://www.instagram.com/pasha.konstantinov/", '../images/pashaKonstantinov/0.jpg'),
    new Master('Шура', 'https://vk.com/inkovtsov', "https://www.instagram.com/inkovtsov/", '../images/@inkovtsov/0.jpg'),
]

class Master{
    constructor(name, vk, instagram, img) {
        this.name = name 
        this.vk = vk 
        this.instagram = instagram
        this.img = img
    }
}
