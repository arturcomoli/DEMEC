const imagensObj = [
    {
        imgSrc: "./assets/img/banner/download.jpeg",
        imgAlt: "Airbus A350-1000",
        imgDesc: "Foto referente ao Airbus A350"
    },
    {
        imgSrc: "./assets/img/banner/cessna172.jpeg",
        imgAlt: "Cessna 172 SkyHawk",
        imgDesc: "Foto do cessna 172 em voo pleno"
    },
    {
        imgSrc: "./assets/img/banner/boeing2.jpg",
        imgAlt: "Boeing 737 MAX",
        imgDesc: "Foto do Boeing 737 MAX em voo"
    },
    {
        imgSrc: "./assets/img/banner/boeing-777x-capa2019-01.jpg",
        imgAlt: "Boeing 777X",
        imgDesc: "Foto do Boeing 777X em voo de teste"
    },
    {
        imgSrc: "./assets/img/banner/beluga.jpg",
        imgAlt: "Airbus A350 Beluga",
        imgDesc: "Foto do Airbus Beluga em voo"
    }    
];

const arrImg = [
    "./assets/img/banner/download.jpeg",
    "./assets/img/banner/cessna172.jpeg",
    "./assets/img/banner/boeing2.jpg",
    "./assets/img/banner/boeing-777x-capa2019-01.jpg",
    "./assets/img/banner/beluga.jpg",
]

console.log(imagensObj)

/* Criação dos radio buttons */
const radioContainer = document.querySelector(".teste")

function criarBotao() {
    for (let i = 0; i < imagensObj.length; i++) {
        const label = document.createElement("label")
        label.classList.add("teste2")
        const radio = document.createElement("input")
        radio.type = "radio"
        radio.name = "radio"
        const span = document.createElement("span")
        span.classList.add("span")

        label.appendChild(radio)
        label.appendChild(span)
        radioContainer.appendChild(label)
    }
}
criarBotao()

/* Associação das imagens com os botões */
const imgBanner = document.querySelector(".banner>img")

function banner (arrImg, imgBanner, tempo) {
    let contador = 0;

    setInterval(() => {
        if (contador < arrImg.length) {
            imgBanner.src = arrImg[contador];
            contador++
        } else {
            contador = 0;
        }
    }, tempo);
}
banner(arrImg, imgBanner, 5000)

const radioBotao = document.querySelectorAll(".span")
console.log(radioBotao)

