
const sliderPages=document.querySelectorAll('.slider__item');
const sliderLine = document.querySelector('.slider__body');
console.log(sliderLine);
let count=0;

function init(){
    console.log('resize');
    let width=window.screen.width;
    if(width>=1230){
        width=1230
    }
    console.log(width);
    sliderPages.forEach(item=>{
        item.style.width=width+'px';
        item.style.height='auto';
    })

}


window.addEventListener('resize',init);

sliderLine.addEventListener('click',function(e){
    if(e.target.classList.contains('slider__username'))
    {console.log('aaaa');
        count++;
        rollSlider()}
})

function rollSlider() {
    let width = document.querySelector('.slider__item').offsetWidth;
    sliderLine.style.transform = 'translate(-' +count* width + 'px)';

}



document.body.addEventListener('click',function (e){
    let width = document.querySelector('.slider__item').offsetWidth;
   let range= e.target.classList;
   var eba=document.getElementsByClassName('slidAct');
    if(range.contains('one')){
        console.log(1);
        eba[0].classList.remove('slidAct');
       
        sliderLine.style.transform = 'translate(-' + (0)* width + 'px)';
        range.add('slidAct');
        counter=0;
        
    }
    if(range.contains('two')){
        eba[0].classList.remove('slidAct');
        console.log(2);
        sliderLine.style.transform = 'translate(-' + (1)* width + 'px)';
        range.add('slidAct');
        counter=1;
    }
    if(range.contains('three')){
        eba[0].classList.remove('slidAct');
        console.log(3);
        sliderLine.style.transform = 'translate(-' + (2)* width + 'px)';
        range.add('slidAct');
        counter=2;
    }
    if(range.contains('four')){
        eba[0].classList.remove('slidAct');
        console.log(4);
        sliderLine.style.transform = 'translate(-' + (3)* width + 'px)';
        range.add('slidAct');
        counter=3;
    }
})