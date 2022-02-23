

sliderLine.addEventListener('touchstart',touchStart);
sliderLine.addEventListener('touchmove',touchMove);


let x1=null;
let y1=null;
let counter=0;
let width=document.querySelector('.slider__item').offsetWidth;


/**------------------------------   every dots under the swiper---------------------- */
let frstDot=document.querySelector('.one');
let secDot=document.querySelector('.two');
let thirdDot=document.querySelector('.three');
let fourDot=document.querySelector('.four');

/*if(counter==1){
              
    secDot.classList.add('slidAct');
}*/



function touchStart(e)
    {

const firstTouch=e.touches[0];

x1=firstTouch.clientX;
y1=firstTouch.clientY;

    }




        if(counter==1){
            let secDot=document.querySelector('.two');
            
        }
    



function touchMove(e)
{if(!x1 || !y1){
    return false;
}
let x2 = e.touches[0].clientX;
let y2 = e.touches[0].clientY;
let xDiff=x2-x1;
let yDiff=y2-y1;
if(Math.abs(xDiff)>Math.abs(yDiff)){
    if(xDiff>0){
      
        if(counter<=0){
            counter=0;
            sliderLine.style.transform = 'translate(-' + (counter)* width + 'px)';
        
            
        }
        else{   --counter;
            sliderLine.style.transform = 'translate(-' + (counter)* width + 'px)';
          
         
            switch(counter){
                case 0: frstDot.classList.add('slidAct');
                secDot.classList.remove('slidAct');
                break;
                case 1: secDot.classList.add('slidAct');
                thirdDot.classList.remove('slidAct');
                break;
                case 2: thirdDot.classList.add('slidAct');
                fourDot.classList.remove('slidAct');
                break;
                
            }
            }
     
        
    }
    else {
        if(counter>=3){
            counter=3;
            sliderLine.style.transform = 'translate(-' + (counter)* width + 'px)';
        }
        else{
            ++counter;
            sliderLine.style.transform = 'translate(-' + (counter)* width + 'px)';
            
            switch(counter){
                case 0: frstDot.classList.add('slidAct');
                fourDot.classList.remove('slidAct');
                    break;
                case 1: secDot.classList.add('slidAct');
                frstDot.classList.remove('slidAct');
                break;
                case 2: thirdDot.classList.add('slidAct');
                secDot.classList.remove('slidAct');
                break;
                case 3: fourDot.classList.add('slidAct');
                thirdDot.classList.remove('slidAct');
                break;
                
            }
        }
        }
}

else {
    if(yDiff>0){
        
    }
    else {}
}

    

x1=null;
y1=null;
    }

function slideItSelf(){
    if(counter>=3){
        counter=3;
        sliderLine.style.transform = 'translate(-' + (counter)* width + 'px)';
    }
    if(counter===3){
        --counter;
            sliderLine.style.transform = 'translate(-' + (counter)* width + 'px)';
           
            switch(counter){
                case 0: frstDot.classList.add('slidAct');
                secDot.classList.remove('slidAct');
                break;
                case 1: secDot.classList.add('slidAct');
                thirdDot.classList.remove('slidAct');
                break;
                case 2: thirdDot.classList.add('slidAct');
                fourDot.classList.remove('slidAct');
                break;}
    }
    else{
       
        ++counter;
        sliderLine.style.transform = 'translate(-' + (counter)* width + 'px)';
      
        
        switch(counter){
            case 0: frstDot.classList.add('slidAct');
            fourDot.classList.remove('slidAct');
                break;
            case 1: secDot.classList.add('slidAct');
            frstDot.classList.remove('slidAct');
            break;
            case 2: thirdDot.classList.add('slidAct');
            secDot.classList.remove('slidAct');
            break;
            case 3: fourDot.classList.add('slidAct');
            thirdDot.classList.remove('slidAct');
            break;
            
        }
    }
}



setInterval(slideItSelf,10000);