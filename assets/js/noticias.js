const arrNoticias = [
    "./assets/img/noticias/F22-Raptor.jpg",
    "./assets/img/noticias/noticia2.jpeg",
    "./assets/img/noticias/noticia3.jpeg",
    "./assets/img/noticias/noticia4.jpg",
    "./assets/img/noticias/noticia5.jpg"
];

const diminuir = document.getElementById("diminuir--noticias");
const aumentar = document.getElementById("aumentar--noticias");
const imgNoticia = document.querySelector(".carrossel--noticias>figure>img")

function noticias() {
    let contador = 0;

    aumentar.addEventListener("click", () => {
        if (contador < arrNoticias.length - 1) {
            contador++;
        } else {
            contador = 0;
        }
        imgNoticia.src = arrNoticias[contador]
    })
    diminuir.addEventListener("click", () => {
        if (contador > 0) {
            contador--;
        }
        imgNoticia.src = arrNoticias[contador];
    })
}
noticias()

// Noticias desktop
const objetoNoticias = [
    {
        titulo: "Título da notícia 1",
        texto: "Texto da notícia 1",
        imgSrc: "./assets/img/noticias/F22-Raptor.jpg",
    },
    {
        titulo: "Título da notícia 2",
        texto: "Texto da notícia 2",
        imgSrc: "./assets/img/noticias/F22-Raptor.jpg",
    },
    {
        titulo: "Título da notícia 3",
        texto: "Texto da notícia 3",
        imgSrc: "./assets/img/noticias/F22-Raptor.jpg",
    },
    {
        titulo: "Título da notícia 4",
        texto: "Texto da notícia 4",
        imgSrc: "./assets/img/noticias/F22-Raptor.jpg",
    },
    {
        titulo: "Título da notícia 5",
        texto: "Texto da notícia 5",
        imgSrc: "./assets/img/noticias/F22-Raptor.jpg",
    },
]



const noticiasDesktop = document.querySelector(".noticias--desktop");
function criarNoticias(objeto) {    
    for (let i = 0; i < objeto.length; i++) {
        const {titulo, texto, imgSrc} = objeto[i];        
        const div = document.createElement("div");
        div.classList.add("quadro--noticia");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = imgSrc;
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = titulo;
        const h3 = document.createElement("h3");
        h3.textContent = titulo;
        const p = document.createElement("p");
        p.textContent = texto;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        div.appendChild(figure);
        div.appendChild(h3);
        div.appendChild(p);
        noticiasDesktop.appendChild(div)
    }
}
criarNoticias(objetoNoticias);