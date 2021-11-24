/*
Exercices qui accompagnent le tuto en anglais de Christian Heilmann :
« The essentials of DOM scripting in 10 minutes »,
http://icant.co.uk/articles/domessentials/
=> voir traduction française sur transparents (js-cours-DOM.pdf)
*/

/* 1. Cibler l'élément d'id nav */
document.getElementById('nav');

/* 2. Récupérer tous les li */
let liste = document.getElementsByName('li')

/* 3. Cibler le 4e li */
document.querySelector('li:nth-child(0n+4)');

/* 4. Compter le nombre de li dans la page */
document.getElementsByTagName('li').length;

/* 5. Cibler le premier li pair */
document.querySelector('li:nth-child(0n+2)');

/* 6. Récupérer tous les li de classe impair */
document.getElementsByClassName('impair');

/* a) afficher ce qu'on obtient */
console.log(document.getElementsByClassName('impair'));

/* b) afficher le 2e li de classe impair */
console.log(document.querySelector('li.impair:nth-child(2)'));

/* c) afficher chacun des li impair */
console.log(document.querySelectorAll('li:nth-child(2n+1)'))


/* d) compter le nombre de li de classe impair dans la page */
document.getElementsByClassName('impair').length;


/* 7. Cibler le 4e li puis, à partir de là, cibler son frère juste avant lui */
document.querySelector('li:nth-child(4)');


/* 8. Cibler le 4e li puis, à partir de là, cibler le suivant */
document.querySelector('li:nth-child(4)').nextElementSibling;


/* 9. Cibler le parent du 4e li */
document.querySelector('li:nth-child(4)').parentNode


/* 10. Récupérer tous les enfants de l'ul */
document.querySelector('ul').childNodes

/* a) afficher ce qu'on obtient */
console.log(document.querySelector('ul').childNodes);
/* b) cibler le 1er enfant de l'ul */
document.querySelector('ul:first-child');

/* c) cibler le dernier enfant de l'ul */
document.querySelector('ul:last-child');

/* c) cibler le 4e enfant de l'ul */
document.querySelector('ul:nth-child(4)');


/* 11. Chaînage de méthodes - que retournent les expressions suivantes ? */
/* a) document.getElementById("nav"). getElementsByTagName("li")[3].firstChild */
// le a about.html

/* b) document. getElementsByTagName("li")[2].childNodes[3].firstChild */
//

/* c) document. getElementsByTagName("li")[2].firstChild.firstChild */
// le a about me


/* 12. Afficher les propriétés (nom du nœud, type de nœud, valeur du nœud) d'un nœud
*/
/* a) du noeud document.getElementById("nav").getElementsByTagName("li")[3].firstChild */
console.log((document.getElementById("nav").getElementsByTagName("li")[3].firstChild).nodeType);
// element node;
/* b) du noeud document.getElementById("nav").getElementsByTagName("a")[2].firstChild */
console.log((document.getElementById("nav").getElementsByTagName("a")[2].firstChild).nodeType);

// text node;
/* 13. Changer le texte "Photos" en "Visuals" */
document.querySelector("#li4 a").textContent = "Visuals";


/* 14. Modifier les attributs d'un élément */
/* a) Changer la valeur de l'attribut href du lien "Photos" en "photos.php" */
document.querySelector("#li4 a").href = "photo.php";

/* a) Lui ajouter un attribut title avec la valeur "voir mes photos" */
document.querySelector("#li4 a").setAttribute("title","voir mes photo");

/* 15. Supprimer le dernier li du menu
       (faites-le en utilisant la méthode querySelector pour cible l'ul
        et querySelectorAll pour cibler les li)
*/
document.querySelector("#nav").removeChild(document.querySelectorAll("li")[5]);


/* 16. Ajouter un li à la fin de la liste */
document.querySelector("#li5").insertAdjacentHTML("afterend","<li></li>");



/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */
let biblio = document.createElement("li");
// biblio.textContent = "Bibliographie";
// biblio.href = "biblio.html";
biblio.title = "consulter ma bibliographie";
document.querySelector("#nav").insertBefore(biblio,document.querySelector("#li4"));
document.querySelector("ul:nth-child(4)").insertAdjacentHTML("beforeend","<a></a>");
document.querySelector("ul:nth-child(4) a").href = "biblio.html";
document.querySelector("ul:nth-child(4) a").textContent = "Bibliographie";





/* 18. Modifier le lien "Photos" 
	  - changer son libellé en "Visuals" 
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie" 
	  - changer la cible du lien en "visuals.html " */
document.querySelector("#li4").title = "voir la galerie";
document.querySelector("#li4 a").href = "visuals.html";




/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals" 
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie" 
	   - qui pointe vers la page "visuals.html " */





/* 20. Remplacer le dernier lien par le texte (non cliquable) "Contact : monmail@gmail.com"*/
