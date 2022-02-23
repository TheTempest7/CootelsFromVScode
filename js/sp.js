const father = document.querySelector(".lsRight__body"), // выбираем первый элемент ul в документе
listElements = document.querySelectorAll(".lsRight__item-body"); // выбираем все элементы li в документе


const myFunc = function(event) {
    switch(event.target.className){
      
        case 'lsRight__caption':
            let parent=event.target.parentNode;
            parent.classList.toggle('spoiler'); 
            
            break;
      
              
               
    }
    
    
};

let df=document.querySelectorAll('.lsRight__filling');

function Tick(e){
let allFather=e.target.parentNode.parentNode;

allFather.classList.toggle('spoiler'); 
}
for (var i = 0; i < df.length; ++i) {
    var item = df[i];
    item.addEventListener("click",Tick)
  }

father.addEventListener("click", myFunc); 




