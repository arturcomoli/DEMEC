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