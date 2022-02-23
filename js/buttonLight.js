
document.body.addEventListener('mouseover', function(e){
    if(e.target.classList.contains('btn'))
    e.target.classList.add('_active');
})


document.body.addEventListener('mouseout', function(e){
    if(e.target.classList.contains('btn'))
    e.target.classList.remove('_active');
})


/*---------------------buttonClick-------------------*/

var buttons= document.querySelectorAll('.btn');
forEach=Array.prototype.forEach;
forEach.call(buttons,function(b){
    b.addEventListener('click',addElement);
});

function addElement(e){
    var addDiv = document.createElement('div'),
        mValue = Math.max(this.clientWidth,this.clientHeight),
        rect   = this.getBoundingClientRect();
        sDiv   = addDiv.style,
        px     = 'px';
    

    sDiv.width = sDiv.height = mValue +px;
    sDiv.left  = e.clientX-rect.left-(mValue/2)+px;
    sDiv.top   = e.clientY-rect.top-(mValue/2)+px;

   

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
 
} 



/*---------------------buttonAddanimItem-------------------*/
const buttonsToAnim= document.body.querySelectorAll('.btn');

for(let indx=0;indx< buttonsToAnim.length; indx++){
    const btnItem=buttonsToAnim[indx];
    btnItem.classList.add('animItem');
}