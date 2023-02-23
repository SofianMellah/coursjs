let ensavoirplus = document.querySelector(`button`);
let texte = document.querySelector(`#suitetexte`);
console.log(ensavoirplus);
function afficherlereste(){
    console.log('texte.length',texte.innerHTML.length);
    if (texte.innerHTML.length<1){
        texte.innerHTML = "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH";
        document.querySelector(`button`).textContent = "Réduire"
    }
    else{
        texte.innerHTML = ""
        document.querySelector(`button`).textContent = "En savoir plus"
    }
}
ensavoirplus.addEventListener("click", afficherlereste);