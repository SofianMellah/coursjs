function calculer(){
    let jeprendslesvaleurs = document.querySelector(`.vide`).value
    let calculedesvaleurs = eval(jeprendslesvaleurs)
    document.querySelector(`.vide`).value = calculedesvaleurs
}


function afficherchiffre(afficherésultat){
    document.querySelector(`.vide`).value += afficherésultat
}


function touteffacer(){
    document.querySelector(`.vide`).value = ``
}


function effacer(){
    revenir = document.querySelector(`.vide`)
    console.log(revenir);
}