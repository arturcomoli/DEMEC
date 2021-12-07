/* MENU MOBILE */

const menuMobile = document.querySelector(".icone");
const navMenu = document.querySelector(".nav--menu");

menuMobile.addEventListener("click", menuToggle);

let menu = false;
function menuToggle() {
    if (menu === false) {
        navMenu.classList.remove("hidden");
        menu = true;
    } else {
        navMenu.classList.add("hidden");
        menu = false;
    }
}

/* SUB MENUS */
const subLink = document.querySelectorAll(".nav--link")
const subMenu = document.querySelectorAll(".nav--submenu")
let departamentoStatus = false
let graduacaoStatus = false
let extensaoStatus = false
let posStatus = false;

for (let i = 0; i < subLink.length; i++) {
    subLink[i].addEventListener("click", function acionarMenus(event) {
        let secao = event.currentTarget
        

        if (secao.id === "departamento" && departamentoStatus === false) {
            subMenu[0].classList.remove("hidden")
            departamentoStatus = true            
        } else if (secao.id === "departamento" && departamentoStatus === true) {
            subMenu[0].classList.add("hidden")
            departamentoStatus = false
        }
        
        if (secao.id == "graduacao" && graduacaoStatus == false) {
            subMenu[1].classList.remove("hidden")
            graduacaoStatus = true;            
        } else if (secao.id === "graduacao" && graduacaoStatus == true) {
            subMenu[1].classList.add("hidden")
            graduacaoStatus = false
        }

        if (secao.id === "extensao" && extensaoStatus == false) {
            subMenu[2].classList.remove("hidden")
            extensaoStatus = true
        } else if (secao.id === "extensao" && extensaoStatus == true) {
            subMenu[2].classList.add("hidden")
            extensaoStatus = false
        }

        if (secao.id === "pos-graduacao" && posStatus == false) {
            subMenu[3].classList.remove("hidden")
            posStatus = true
        } else if (secao.id === "pos-graduacao" && posStatus == true) {
            subMenu[3].classList.add("hidden")
            posStatus = false
        }
    })
}

