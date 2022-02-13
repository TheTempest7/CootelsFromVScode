const animItems=document.querySelectorAll('.animItem');
console.log(animItems);
if(animItems.length>0){
    window.addEventListener('scroll',animOnScroll);
    function animOnScroll(){
        for (let index = 0;index < animItems.length; index++){
            const animItem=animItems[index],
            animItemHeight=animItem.offsetHeight,
            animItemOffset=offset(animItem).top,
            animStart=4;
            

            let animItemPoint=window.innerHeight-animItemHeight/animStart;
            if(animItemHeight>window.innerHeight){
                animItemPoint=window.innerHeight-window.innerHeight/animStart;
                        }
            if((pageYOffset>animItemOffset-animItemPoint)&&pageYOffset<(animItemOffset+animItemHeight)){
            animItem.classList.add('activated');
            }
            else{
                animItem.classList.remove('activated');
            }
        }
    }

    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
    return{top:rect.top+scrollTop, left:rect.left+scrollLeft}
    }
}

animOnScroll();