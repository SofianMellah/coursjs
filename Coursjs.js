// let adresse ;
// let age = 3i;
// console.log(age);
// age = 35;
// console.log(age);
// console.log("Mon age est : "+age);


// const nom="Julien";
// const age = 33;
// const moyenne= 18.5;
// const isCool=true;
// const x=null;
// const y=undefined;


// let age = 28;
// console.log("Mon age est de : "+age)
// let prénom = "Sofian"
// console.log("Mon prénom est : "+prénom)
// let métier = "Dev web"
// console.log("Mon futur métier est : "+métier)


// let note = 18/20;
// note = 16 * note;
// console.log(`Ma note en JS est : ${note}`);


// let prénom = "Sofian "
// let nom = "Aida"
// console.log(`Mon blase c\'est : ${prénom+nom}`);


// let prénom = "Sofian ";
// let nom = "Aida";
// let russe = prénom+nom;
// console.log(`Mon vrai blase c'est : ${russe}`);


// let prénom = "Sofian ";
// let nom = "mellah ";
// let adresse = "Loos ";
// let ancien = "bois blanc ";
// let kg = 45;
// kg = 45*2;
// let grammes = 3;
// console.log(`Je m'appel : ${prénom.substring(0,3).toUpperCase()+nom} et j'habite à ${adresse.split('6')} mais avant j'habitais à ${ancien.substring(0,10)} et je fais ${kg/grammes}kgs`);


// let numbers = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// let fruits = ["Fraise","Mangue","Pastèque","Raisins","Orange","Ananas"];
// console.log(fruits[3]);


// acces a un element du tableau
// console.log(fruits[0]); // acces au 1ere element console.log(fruits[3]); // acces au 4eme element fruits.unshift("fraise"); // ajout au debut du tableau fruits.push("banane"); // ajout en fin de tableau
// fruits.shift(); // supprimer le 1er element
// fruits.pop(); // supprimer le dernier element console.log(fruits.indexOf("orange")); // retourne l’index de l'elem ent orange
// console.log(Array.isArray(fruits)); 
// true


// let Profil = {
//     Nom : "Benzema",
//     Prénom : "Karim",
//     DateDeNaissance : "15/04/1994",
//     Passions : ["Foot","Jeux-vidéos","Cuisine"],
//     Adresse : {
//         Rue : "Coli",
//         Ville : "Lille",
//         Pays : "France"
//     }
// };

// console.log(Profil);
// console.log(Profil.Passions);
// console.log(Profil.Passions[1], Profil.Passions[2]);
// console.log(Profil.Passions[0], Profil.Passions[1]);
// console.log(Profil.Adresse.Ville);
// Profil.Prénom = "Sofian";
// console.log(Profil.Prénom);
// Profil.email = "Sofian@hotmail.fr";
// console.log(Profil.email);


// let oué = [
//     {
//         id : 1,
//         texte : "Faire les courses",
//         Fais : true,
//     },
//     {
//         id : 2,
//         texte : "Se balader",
//         Fais : false,
//     },
//     {
//         id : 3,
//         texte : "Préparer le diner",
//         Fais : true,
//     },
//     {
//         id : 4,
//         texte : "Regarder la télé",
//         Fais : false,
//     },
//     {   
//         id: 5,
//         texte : "Regarder la télé",
//         Fais : false,
//     }

// ];
// console.log(oué);
// console.log(`la tache d'id ${oué[1].id} est : ${oué[2].texte}`);
// oué.push({
//     id : (oué.at(-1).id+1),
//     texte : "Manger",
//     Fais : true,
// })
// oué.push({
//     id : (oué.at(-1).id+1),
//     texte : "Manger",
//     Fais : true,
// })
// oué.push({
//     id : (oué.at(-1).id+1),
//     texte : "Manger",
//     Fais : true,
// })
// oué.push({
//     id : (oué.at(-1).id+1),
//     texte : "Manger",
//     Fais : true,
// })
// oué.push({
//     id : (oué.at(-1).id+1),
//     texte : "Manger",
//     Fais : true,
// })
// console.log(oué);
// console.log(oué.at(-1).id+1);


// let oui = 3;
// let non = 2;
// let tqt = oui + non;
// let tqtfrere = oui - non;
// console.log("La somme est de : "+tqt);
// console.log(`La somme de ${oui} + ${non} = ${tqt}`);
// console.log(`La somme de ${oui} - ${non} = ${tqtfrere}`);


// let numbers = Array(1, 2, 3, 4, 5, 6,);
// let joueurs = ["Zidane","RonaldoR9","Messi","Zlatan","Henry","Iniesta"];
// console.log(joueurs[1]);
// console.log(joueurs.at(-1));
// joueurs.unshift("Viera");
// console.log(joueurs[0]);
// console.log(joueurs);


// let personne = {
//     prénom: "Julien",
//     nom: "La garde",
//     age: 30,
//     passions: [
//         "foot", "natation", "jeux-vidéos"
//     ],
//     adresse: {
//         rue : "Rue nationale",
//         ville : "Lille",
//         pays : "France"
//     }
// };
// console.log(personne);
// console.log(`${personne.prénom} est agé de ${personne.age} ans, il habite à ${personne.adresse.ville}`);
// personne.passions.push("cuisine");
// console.log(personne.passions);
// console.log(personne);
// personne.adresse.rue = "Boulevard Valley";
// personne.adresse.ville = "Californie";
// personne.adresse.pays = "USA";
// console.log(personne);


// let premier = Number.apply
// getElementsByClassName(premier)=


// let age = 14;
// let majorité = 18;

// if ( age >= majorité ){
//     console.log("Majeur");
// }else{
//     console.log("Mineur");
// }

// let performance = 90;
// let prime = 0;

// if (performance >= 90){prime=200
// }
// else if (performance >= 80){prime=150
// }
// else if (performance >= 70){prime=100
// }
// else if (performance < 70){prime+0
// }
// console.log(`Avec votre performance de ${performance} vous gagnez une prime de ${prime}e`);

// let txt1 = "how're ayou tay";
// let txt2 = "welcome to HTML";

// if (txt1.length > txt2.length)
// {
//     console.log(`Le txt1 est le plus long`)
// }
// else if (txt1.length < txt2.length)
// {
//     console.log(`Le txt2 est le plus long`)
// }
// else if (txt1.length == txt2.length)
// {
//     console.log(`Ils sont de la même longueur`)
// }


// let Grade = prompt(`Quel est votre grade ? ( Junior, Confirmé, Sénior)`);

// let Salaire = 0;

// switch (Grade) {
//     case `Junior`:
        
//             Salaire=`1800euros`;
        
//     break;
//     case `Confirmé`:
        
//             Salaire=`2500euros`;
        
//     break;
//     case `Sénior`:
        
//             Salaire=`3200euros`;
        
//     break;
//     default : 
//             Salaire=`On sait pas`
//             Grade=`ouétqtfiston`
// }
// console.log(`Avec votre grade de ${Grade} vous gagnez un salaire de ${Salaire}`);


// let Roues =  Number (prompt(`Combien avez vous de roues ?`));
// let Véhicule = "Autres";

// switch (Roues) {
//     case 2:
//         Véhicule = `une moto`
//     break;
//     case 4:
//         Véhicule = `une voiture`
//     break;
//     case 6:
//         Véhicule = `un camion`
// }
// console.log(`Votre véhicule est : ${Véhicule}`);


// let oué = [
//     {
//         id : 1,
//         texte : "Faire les courses",
//         Fais : true,
//     },
//     {
//         id : 2,
//         texte : "Se balader",
//         Fais : false,
//     },
//     {
//         id : 3,
//         texte : "Préparer le diner",
//         Fais : true,
//     },
//     {
//         id : 4,
//         texte : "Regarder la télé",
//         Fais : false,
//     },
//     {   
//         id: 5,
//         texte : "Regarder la télé",
//         Fais : false,
//     }
// ];
// console.log(`La tache d'${oué[0].id} est de "${oué[0].texte}" elle comporte ${oué[0].texte.length} caractères et elle est ${oué[1].Fais == true ? `complétée`:`non complétée` }`);


// let fruits = ["Fraise","Mangue","Pastèque","Raisins","Orange","Ananas","Fraise","Mangue","Pastèque","Raisins","Orange","Ananas","Fraise","Mangue","Pastèque","Raisins","Orange","Ananas","Fraise","Mangue","Pastèque","Raisins","Orange","Ananas","Fraise","Mangue","Pastèque","Raisins","Orange","Ananas","Fraise","Mangue","Pastèque","Raisins","Orange","Ananas,"];

// for (fulltableau = 0; fulltableau < fruits.length; fulltableau++){
//     console.log(fruits[fulltableau].length)
// }


// let numbers = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// let fruits = ["Fraise","Mangue","Pastèque","Raisins","Orange","Ananas"];
// let newtableau = [];
// for (let i = 0; i < fruits.length; i++) 
// {
// console.log([i].length);    
// newtableau.push(fruits[i].length);
// }


// let oué = [
//     {
//         id : 1,
//         texte : "Faire les courses",
//         Fais : true,
//     },
//     {
//         id : 2,
//         texte : "Se balader",
//         Fais : false,
//     },
//     {
//         id : 3,
//         texte : "Préparer le diner",
//         Fais : true,
//     },
//     {
//         id : 4,
//         texte : "Regarder la télé",
//         Fais : false,
//     },
//     {   
//         id: 5,
//         texte : "Regarder les lcs",
//         Fais : false,
//     }
// ];
// for (let i = 0; i < oué.length; i++) {
//     document.write(oué[i].texte + "<br>");
// }


// let oué = [
//     {
//         id : 1,
//         texte : "Faire les courses",
//         Fais : true,
//     },
//     {
//         id : 2,
//         texte : "Se balader",
//         Fais : false,
//     },
//     {
//         id : 3,
//         texte : "Préparer le diner",
//         Fais : true,
//     },
//     {
//         id : 4,
//         texte : "Regarder la télé",
//         Fais : false,
//     },
//     {   
//         id: 5,
//         texte : "Regarder les lcs",
//         Fais : false,
//     }
// ];

// for (let yvapaschanger = 0; yvapaschanger < oué.length; yvapaschanger++) {
// document.write(oué[yvapaschanger].texte +"<br>")
// }
// let tache = "";

// for (let i = 0; i < oué.length; i++) {
//     let el = oué[i]; /* let el représente oué[i] et donc c'est un raccourci*/

// tache += (`La tache d'${el.id} est de "${el.texte}" elle comporte ${el.texte.length} caractères et elle est ${el.Fais == true ? `complétée`:`non complétée` }<br>`);

// }
// document.write(tache)

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let somme = 0;
// let min = 0;
// let max = 10;
// let bouteille = Math.random() * (max-min);
// document.write(bouteille);
// console.log(bouteille);
// for (let i = 0; i < bouteille.length; i++) {
//     let el = bouteille[i];
//     console.log();
// }
// console.log(Math.random()*1000);




let oué = [
    {
        id : 1,
        texte : "Faire les courses",
        Fais : true,
    },
    {
        id : 2,
        texte : "Se balader",
        Fais : false,
    },
    {
        id : 3,
        texte : "Préparer le diner",
        Fais : true,
    },
    {
        id : 4,
        texte : "Regarder la télé",
        Fais : false,
    },
    {   
        id: 5,
        texte : "Regarder les lcs",
        Fais : false,
    }
];
// let i = 0;
// while (i<oué.length) {
//     console.log(oué[i].texte);
//     i++;
// }
// let Chiffre = Number (prompt(`Veuillez saisir un nombre entre 0 compris et 10 compris`))
// while (Chiffre < 0 || Chiffre > 10) {
//     alert(`Entre 0 et 10 ou j'te goume`);
//     Chiffre = Number (prompt(`Veuillez saisir un nombre entre 0 compris et 10 compris`))
// }
// alert(`C'est bon khouya`)

let fruits = ["Fraise","Mangue","Pastèque","Raisins","Orange","Ananas"];
// fruits.reverse();
// console.log(fruits);
// fruits.forEach(
//     function (nom) {
//         console.log(nom)
//         document.write(nom + "<br>")
//     }
// );
// let fruits2 = []
// fruits.forEach(
//         function (fruits) {
//             fruits2.push(fruits.split('').reverse().join(''))
//     }
// );
// console.log(fruits2);


// function somme(a, b, c){
//     return a * b * c;
// }
// console.log(somme(5,2,5));
// console.log(somme(89,1,44));
// console.log(somme(4,2,3));
// console.log(somme(1,2,9));
// console.log(somme(2,2,3423));
// let secondes = 60;

// let minutes = 60;
// function sectomin(minutes){
//     return minutes*60
// }
// document.write(`Il y à ${sectomin(minutes)} secondes dans ${minutes} minutes`);



// let fruits = ["Fraise","Mangue","Pastèque","Raisins","Orange","Ananas"];
// [fruits[0], fruits.at[-1]]
// function last(premier){
//     return [premier[0], premier.at(-1)];
// }
// console.log(last(fruits));