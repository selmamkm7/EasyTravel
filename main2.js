// let prenom="selma";
// let nom="mokadem";
// let age=25;

// console.log(prenom, nom, age);

// console.log(`Mon prenom est ${prenom}, et il comporte ${prenom.length} caracteres.`);

// console.log("Bonjour, je m'appelle " +prenom +' '+nom + " et j'ai " + age + "ans");
// console.log(``.length)

// let url="https://css-tricks.com"
//  console.log(url.split('/')) //decomposer un url

//  const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//  const fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
//  console.log(fruits[0]); // acces au 1ere element 
//  console.log(fruits[3]); // acces au 3eme element
//  fruits.unshift("fraise"); //ajout debut de tableau
//  fruits.push("banane"); // ajout en fin de tableau
//  fruits.shift(); // supprimer le 1er element
//  fruits.pop(); // supprimer le dernier element 
//  console.log(fruits.indexOf("orange")); // retourne l’index de l'element orange
//  console.log(Array.isArray(fruits)); // true 

// Afficher chaque fruit avec forEach inverse:
// fruits.forEach(function (fruits) {
//   console.log(fruits.split("").reverse().join(""))
// })


//  let letters = new Array ("a", "b", "c", "d", "e");
//  console.log(letters)
//  console.log(letters.shift());
//  console.log(letters);
//  console.log(letters.unshift("Y","Z"));
//  console.log(letters[2]);
//  console.log(letters.at(-1)); 
//  console.log(letters[letters.length-1])


//  const personne = {
//     prenom: "Selma",
//     nom: "Mokadem",
//     age: 25,
//     passions: ["dormir", "manger", "marcher"], adresse : {
//         rue : "rue Nationale",
//         ville : "Lille",
//         pays : "France"
//     } };


   
// console.log(`${personne.prenom} est age de ${personne.age} ans, elle habite a ${personne.adresse.ville}.`);
// console.log(personne.passions.push("boxe"));
// console.log(personne);
// personne.adresse.ville = "Bruxelles";
// personne.adresse.rue ="Stalingrad";
// personne.adresse.pays ="Belgique";
// console.log(personne);
// console.log(`Selma demenage, elle habite Avenue ${personne.adresse.rue} a ${personne.adresse.ville} en ${personne.adresse.pays}.`);



// const todos = [
// {
//   id: 1,
//   text: "Faire les courses", 
//   isCompleted: true,
// },
// {
//   id: 2,
//   text: "Balade au Vieux Lille",
//   isCompleted: true,
// },
// {
//  id: 3,
//  text: "Préparer le diner",
//  isCompleted: false,
//  },
//  {
//  id: 4,
//  text: "Regarder la TV",
//  isCompleted: false,
// },
// ];


// tache = ""
// for (let i = 0; i < todos.length; i++) {
//      const el = todos[i] ; 
    
//     tache += ` la tache d'id ${el.id} est "${el.text}" elle comporte ${el.text.length} caracteres. Elle est ${el.isCompleted ? " complete" : " non complete"}.`+ "<br>"
//     console.log(i + tache);
//     document.write(` la tache d'id ${el.id} est "${el.text}" elle comporte ${el.text.length} caracteres. Elle est ${el.isCompleted ? " complete" : " non complete"}.`+ "<br>")
// };
// document.write(tache) 

// afficher toute les taches avec while :

// let tache = "";
// let i = 0;
// while (i < todos.length) {
//   const el = todos[i] ;
//   document.write(` la tache est ${el.text} .`+ "<br>")
//   i++;
// }
// document.write(tache) 

// demander a l'utilisateur un nombre compris entre 0 et 10 et affichere OK sinon redemander :
//  let x = Number(prompt('Entrez un nombre entre 0 et 10'));

// while(x<0 || x>10) {
//         x = Number(prompt('Entrez un nombre entre 0 et 10'))
// }
//  console.log('OK')

// Additioner un tableau :
// let nombre = [1, 2, 3, 4, 5, 6];
// let somme = 0;

// for (let i = 0; i < nombre.length; i++) {
//     somme += nombre[i];
// }
// console.log(somme);

// Generer un tableau avec nombre aleatoire:
// let tab =[]
// for (let i=0; i<5; i++){
//     // console.log(Math.round(Math.random()*100))
//     tab.push(Math.round(Math.random()*100))
// }
// console.log(tab)



// let min =0
// let max=0
// let sequence = [];
// for (var i = 0; i < 6; i++) {
//     function getRandomIntInclusive(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min)) + min;
//       }
//       sequence.push(getRandomIntInclusive(1,9));
//     }
//     document.write(sequence)
    
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
  

// console.log(`la tache ${todos[1].text} est ${todos[1].isCompleted ? " complete" : " non complete"}.`); //La tache a ete complete ou non


// console.log(todos[2].text.length);

// console.log(todos.at(-1).id+1);
// console.log(todos[todos.length-1].id+1)


// todos.push({
//     id: todos.at(-1).id+1,
//     text: "partir en pause",
//     isCompleted: false})
// console.log(todos)



// a partir d'une variable age, a l'aide d'un bloc de condition, dite dans la console si la personne est majeur ou mineur :

// let age = 25;
// if (age < 18) 
// {
//     resultat = "la peronne est mineur";
    
// }
// else
// {
//     resultat = "la personne est majeur";
    
// }

// console.log(resultat)

// definir la nouvelle variable performance (comprise entre 0 et 100), et en fonction de cette performance, vous gagnerez une certaine prime :
//  si perf >= 90 -> prime de 200
//  si perf >= 80 -> prime de 150
//  si perf >= 70 -> prime de 100
//  si perf  < 70 -> prime de 0

// let performance = 60 ;
// let prime = 0

//   if (performance >= 90 && performance <= 100)
//   {
//     prime = 200
//   }
//   else if (performance >= 80 )
//   {
//     prime = 150
//   }
//   else if (performance >= 70 && performance >= 0) 
//   {
//     prime = 100
//   }
//   else {
//     console.log("Try Again")
//   }
//   console.log(`Avec votre performance de ${performance}, vous gagnez une prime de ${prime}.`)

// Afficher si la phrase 1 est plus longue que la phrase 2 :

// let txt1 = "how are"
// let txt2 = "how are"

// if (txt1.length > txt2.length)
// {
//     resultat = "txt1 est superieur"
// }
//  else if (txt1.length < txt2.length)
// {
//     resultat = "txt2 est superieur"
// }
// else if (txt1.length == txt2.length)
// {
//     resultat = "les textes sont egaux"
// }
// console.log(resultat)

// let resultat = txt1 > txt2 ? "txt1 est superieur" : txt1 < txt2 ? "txt2 est superieur" : "txt egaux"
// console.log(resultat)


// Exo 1: Bienvenue
// let prenom = prompt("Entrez votre prénom :"); 
// alert(`Bonjour, ${prenom}`);

// Exo 2: Addition
// let x = Number(prompt("Entrez un nombre"));
// let y = Number(prompt("Entrez un nombre"));
// // let somme = ""
// somme = x + y;
// console.log(somme);

// let grade = prompt("Entrez votre grade (junior, intermediaire, senior)")

// switch (grade) {
//     case "junior": salaire = 1800 
//         break;
//     case "intermediaire": salaire = 2500
//         break;
//     case "senior": salaire = 3200
//     default: salaire = erreur     
// } 
// console.log(`Avec votre le grade de ${grade}, vous gagnez un salaire de ${salaire}.`)

// let fab = Number(prompt("Saisir le prix de fabrication"));
// let vente = Number(prompt("Saisir le prix de vente du produit"))

// if (fab > vente)
// {
//     resultat = fab - vente
//     console.log(`Profit de ${resultat}.`);
// }
//  else if (fab < vente)
// {
//     resultat = fab - vente
//     console.log(`Perte de ${resultat}.`)
// }
// else if (fab = vente)
// {
//     resultat = fab - vente
//     console.log(`Profit de ${resulat}.`)
// }

// let vehicule = {
//   id: 11456,
//   matricule: "DY 719 HE",
//   type: "v",
//   age: 5
// }
 
// console.log(`Il s'agit d'un(e) ${vehicule.type == "v" ? " voiture" : " camion"}.`)

// Exo 4 :
// let nombre1 = Number(prompt("Saisir un nombre"));
// let nombre2 = Number(prompt("Saisir un nombre"));
// let nombre3 = Number(prompt("Saisir un nombre"));

// if (nombre1 > nombre2 > nombre3)
// {
//     console.log(nombre1)
// }
//  else if (nombre2 > nombre3)
// {
//     console.log(nombre2)
// }
// else 
// {
//     console.log(nombre3)
// }

// let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
// let text = ""
// let lgfruits = []

// for (let i = 0; i < fruits.length; i++) {
//     // fruits.i += fruits[i] + "<br>";
//     console.log(fruits[i].length)
//     lgfruits.push(fruits[i].length)
// }
// document.getElementById("demo").innerHTML = text;

// Ecrire une fonction qui renvoie le produit de 3 nombres:
// let somme = (a, b, c) => a * b * c;
// console.log(somme(1, 2, 1));

// Ecrire un script qui converti les minutes en secondes et afficher le dans le navigateur :
// let min=2
// function minToSec(x) { 
//    return  x * 60
//   }
//   document.write(`Il y a ${minToSec(min)} secondes dans ${min} minute.s`)

// Ecrire un script qui renvoie systematiquement le premier et dernier element d'un tableau (puis un element aleatoire du TABLEAU)
// let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
// function premierEtDernier(tab) {
//    return tab[0] + " " + tab[tab.length - 1]
//   }
//   console.log(premierEtDernier(fruits));
  
  // let random = Math.floor(Math.random()*fruits.length);
  // let value = fruits[random];
  // console.log(value)

  // Entrez un nombre de seconde et l'afficher en H:m:s
//   let d = Number(prompt("Entrez un nombre de seconde"))
//   function secondsToHms(d) {
//     d = Number(d);
//     let h = Math.floor(d / 3600);
//     let m = Math.floor(d % 3600 / 60);
//     let s = Math.floor(d % 3600 % 60);

//     let hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
//     let mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
//     let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
//     return hDisplay +":"+ mDisplay +":"+ sDisplay; 
// }
// console.log(secondsToHms(d));


// // 1-Afficher dans la console le contenu du titre principal:
// let titre =document.querySelector(".titre")
// console.log(document.querySelector(".titre").textContent);

// // //2- avec js remplacer le contenu du paragraphe par le contenu du titre principal:

// let para1= document.querySelector(".para1");
// para1.textContent= titre.innerHTML

// // //3- modifier la couleur de fond du titre principal:

// document.querySelector(".titre").style.backgroundColor = "red";

// // // 4 - copier/coller plusieurs fois le paragraphe, puis en js, modifier la couleur de fond de chaque paragraphe

// let paras = document.getElementsByClassName('container1')
// console.log(paras)
// Array.from(paras).forEach(x =>{
//   x.style.backgroundColor = 'red'
// })

// 5 - commenter les exos précédent, et dans le fichier html créer un bouton a la suite de la section

// 6 - refaire l'exo 2, mais cette fois ci le paragraphe devra changer seulement quand vous cliquerez sur le bouton

// let para1= document.querySelector(".para1");
// document.getElementById('change').onclick = changeColor;   

//     function changeColor() {
//         document.titre.style.color = "purple";
//         return para1.textContent= titre.innerHTML;
//     }   


// 7 - récupérer 2 images, et en afficher une dans l'html
// (1 seule balise image)
// quand vous cliquerez sur l'image, ca la remplacera par la 2ème
// et éventuellement vice-versa

// 8 - dans une div a part, créer 4-5 petits carrés avec chacun une couleur différente, au click sur une de ces couleur, changer la couleur de fond de la page


