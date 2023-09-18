var addButton = document.querySelector('#ajout');
var toDo = document.querySelector('#toDo');
var input = document.querySelector('#inputField');

// Charger les tâches depuis le localStorage lors du chargement de la page

window.addEventListener('load', function() {
    var savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        toDo.innerHTML = savedTasks;
        setupTaskListeners();
    }
});


    function XA(){  
    if(input.value !== "") { 
        var paragraph = document.createElement('p');
        paragraph.innerText = input.value;
        toDo.appendChild(paragraph);
        input.value = "";
        paragraph.classList.add('pStyle');
        
        setupTaskListeners(); // Appeler la fonction pour ajouter les listeners aux nouvelles tâches
        
        // Sauvegarder dans le localStorage
        saveTasksToLocalStorage();
       
    }
}
addButton.addEventListener('click', XA, false);


document.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
       XA();
    }
}, false);



function setupTaskListeners() {
    var tasks = document.querySelectorAll('.pStyle');
    
    tasks.forEach(function(task) {
        task.addEventListener('click', function() {
            task.classList.add('pClick');
            saveTasksToLocalStorage();
        });

        task.addEventListener('dblclick', function() {
            task.remove();
            saveTasksToLocalStorage();
        });
    });
}

function saveTasksToLocalStorage() { // Sauvegarder dans le localStorage
    var tasks = toDo.innerHTML;
    localStorage.setItem('tasks', tasks);
}



     document.addEventListener("DOMContentLoaded", function() { 
    
    const closeBtn = document.querySelector('.closebtn');
    closeBtn.addEventListener("click", function() {
      var div = this.parentElement;
      div.style.opacity = "0";
      setTimeout(function() {
        div.style.display = "none";
      }, 600);
    });
    })
     