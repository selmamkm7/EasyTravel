const btn = document.querySelector(".btn");
const btnInscription = document.querySelector('.inscr')
const text = document.querySelector(".text");
const text2 = document.querySelector(".text2");

let shown = true;
let shown2 = true;


function toggleText() {
    if(shown) {
        btn.innerText = "connextion";
        text.style.opacity = 0;
    }
    
    else {
       btn.innerText = "retour en arriere";
       text.style.opacity = 1;
    }
    
    shown = !shown
}

btn.addEventListener("click", () => {
    toggleText();
})



function toggleText2() {
    if(shown2) {
        btnInscription.innerText = "inscription";
        text2.style.opacity = 0;
    }
    
    else {
       btnInscription.innerText = "retour en arriere";
       text2.style.opacity = 1;
    }
    
    shown2 = !shown2
}

btnInscription.addEventListener("click", () => {
    toggleText2();
})