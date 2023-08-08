var addButton = document.querySelector('#ajout');
var toDo = document.querySelector('#toDo');
var input = document.querySelector('#inputField');


addButton.onclick = function(){

    //verif input vide
    if(inputField.value != ""){ //pas vide => creer element enfant

        var paragraph = document.createElement('p')
    }
    //associer element et contenu de l'input

    paragraph.innerText = inputField.value;


    //insérer élément dans la liste
    toDo.appendChild(paragraph);

    //vider l'input
    inputField.value ="";

    //style
    paragraph.classList.add('pStyle');

    //barrer
    paragraph.addEventListener('click', function(){
         
         paragraph.classList.add('pClick');
       
    })

    //clear all
    paragraph.addEventListener('dblclick', function(){
         
        toDo.remove(paragraph);
        
   })

}



