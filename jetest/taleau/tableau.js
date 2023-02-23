let Kebab = document.querySelector(`.totalKebab`);
let Kefta = document.querySelector(`.totalKefta`);



function totalkebab(){
    let premier = Number (document.querySelector(`.kebab1 input`).value);
    console.log(premier);
    let deuxieme = Number (document.querySelector(`.kebab2 input`).value);
    console.log(deuxieme);
    let troisieme = Number (document.querySelector(`.kebab3 input`).value);
    console.log(troisieme);
    résultatsKebab = premier + deuxieme + troisieme;
    console.log(`total kebab`, résultatsKebab);
    Kebab.innerHTML = (résultatsKebab);
}



function totalkefta (){
    let premierkefta = Number (document.querySelector(`.kefta1 input`).value);
    console.log(premierkefta);
    let deuxiemekefta = Number (document.querySelector(`.kefta2 input`).value);
    console.log(deuxiemekefta);
    let troisiemekefta = Number (document.querySelector(`.kefta3 input`).value);
    console.log(troisiemekefta);
    résultatsKefta = premierkefta + deuxiemekefta + troisiemekefta;
    console.log(`total kefta`, résultatsKefta);
    Kefta.innerHTML = (résultatsKefta)
}