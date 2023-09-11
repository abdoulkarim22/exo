//console.log(chanson);


// Titre 1. 
const titre = document.createElement("h1")
titre.innerHTML = `<small>${chanson.auteur}-</small>${chanson.titre}`;
const bady = document.body;
bady.appendChild(titre);


// je cree input Masquer les paroles
const inputRefrain = document.createElement("input")
const label = document.createElement("label")
label.appendChild(inputRefrain)
inputRefrain.placeholder = "Masquer les refrains"
inputRefrain.type = "checkbox"
inputRefrain.id = "input"

label.appendChild(document.createTextNode(inputRefrain.placeholder))

document.body.appendChild(label)

// je cree input Masquer les paroles
const inputRefrain2 = document.createElement("input")
const label2 = document.createElement("label")
label2.appendChild(inputRefrain2)
inputRefrain2.placeholder = "Masquer les paroles"
inputRefrain2.type = "checkbox"
inputRefrain2.id = "input2"

label2.appendChild(document.createTextNode(inputRefrain2.placeholder))

document.body.appendChild(label2)

const elementSuivant = inputRefrain.nextSibling;
console.log(elementSuivant);



// 2.
//je cree la div
const phrase = document.createElement("div")


for (let i = 0; i < chanson.paroles.length; i++) {
    const element = chanson.paroles[i];
    const span = document.createElement("span")
    const para = document.createElement("p")
    para.classList.add(element.type)
    para.appendChild(span)
   if (element.type === "verset") {
     para.firstElementChild.classList.add("disparu")
     console.log(para.firstElementChild);
   }

    for (let r = 0; r < element.contenu.length; r++) {
        span.appendChild(document.createTextNode(element.contenu[r]))
        if (r < element.contenu.length) {
            span.appendChild(document.createElement("br"))
            
        }

    }
    phrase.appendChild(para);

}
document.body.appendChild(phrase)



// 3.

const footerr = document.body;
const value = document.createElement("footer")
value.innerText = "© Copyright 2023 - Codeloccol"
footerr.append(value);
// footer



const twoelement = inputRefrain2.nextSibling;






inputRefrain2.addEventListener('click', function (event) {

    if (event.target.checked) {
      // la case vient d'être cochée
      phrase.classList.add("hidden")
      twoelement.textContent = "afficher les paroles"
      console.log("button cheque");
    } else {
      // la case vient d'être decochée
      phrase.classList.remove("hidden")
      twoelement.textContent = "masquer les paroles"
      titre.classList.remove("hidden")
      console.log("boutton decocher");
    }
  });
  
  //  les elements qui ont  la class refrain
    // event.target contient l'élément cliqué (ici checkboxParoles dans notre cas)


    
const recupeur = document.querySelectorAll(".disparu")
const maclass = document.querySelectorAll(".verset")
for (let x = 0; x < maclass.length; x++) {
    const lesSpan = document.createElement("span");
    lesSpan.classList.add("hard")
    lesSpan.classList.add("hidden")
    lesSpan.textContent = "[verset]"
    maclass[x].appendChild(lesSpan);
}
const frere = document.querySelectorAll(".hard")
console.log(frere);


inputRefrain.addEventListener( 'click',function (event) {
  if (event.target.checked) {
    for (let f = 1; f < recupeur.length; f++) {
      recupeur[f].classList.add("hidden")
      frere[f].classList.remove("hidden")
      elementSuivant.textContent = "Afficher les refrains"
    }    
  }
  else{
    for (let f = 1; f < recupeur.length; f++) {
      recupeur[f].classList.remove("hidden")
      frere[f].classList.add("hidden")
      elementSuivant.textContent = "Masquer les refrains"
    }
  }
  
})




for (let i = 0; i < frere.length; i++) {
  frere[i].addEventListener('mouseenter', function () {
    recupeur[i].classList.remove("hidden")
    console.log("refrain survoler");
   });
}

for (let i = 0; i < frere.length; i++) {
  frere[i].addEventListener('mouseleave',function(){
    recupeur[i].classList.add("hidden")
});
}
