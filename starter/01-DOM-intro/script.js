console.log(document.querySelector("ul li"));/*retourne le premier élément qui satisfait le sélecteur*/

const aLis = document.getElementsByTagName("li");

for (const aLi of aLis) {
    console.log(aLi.className);
    aLi.className = "Tata";
    aLi.textContent = "Titi";
}