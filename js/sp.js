const father = document.querySelector(".lsRight__body"), // выбираем первый элемент ul в документе
listElements = document.querySelectorAll(".lsRight__item-body"); // выбираем все элементы li в документе


const myFunc = function(event) {
    switch(event.target.className){
        case 'lsRight__filling-daughter _icon-arrowDown':
            let stepfayher=event.target.parentNode;
            stepfayher.classList.toggle('spoiler'); 
            console.log(stepfayher);
        case 'lsRight__caption':
            let parent=event.target.parentNode;
            parent.classList.toggle('spoiler'); 
            console.log(parent);
           
     
                break;
            
               
    }
    switch(event.target.className){
        case 'lsRight__filling-daughter _icon-arrowDown':
            console.log(stepfayher);
            let stepfayher=event.target.parentNode;
            stepfayher.classList.toggle('spoiler'); 
            console.log(stepfayher);
            break;
    }
};





father.addEventListener("click", myFunc); 




