'use strict';

const names=['bag','banana','bathroom','boots','breakfast','bubblegum',
    'chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors',
    'shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass',
];
const imgSection=document.getElementById('imgSection');
const leftImg=document.getElementById('leftImg');
const centerImg=document.getElementById('centerImg');
const rightImg=document.getElementById('rightImg');

function Products(name){
    this.name=name;
    this.views=0;
    this.votes=0;
    this.path=`./img1/${name}.jpg`;
    this.numberOfRounds=0;
    Products.all.push(this);
}
Products.all=[];
for(let i=0;i<names.length;i++){
    new Products(names[i]);
}
//[0,1,2,....,19]
 function render(){
   const leftIndex=randomNumber(0,Products.all.length-1);
   const leftRandomProducts=Products.all[leftIndex];
   leftImg.src=leftRandomProducts.path;
   leftImg.title=leftRandomProducts.name;
   leftImg.alt=leftRandomProducts.name;

   const centerIndex=randomNumber(0,Products.all.length-1);
   const centerRandomProducts=Products.all[centerIndex];
   centerImg.src=centerRandomProducts.path;
   centerImg.title=centerRandomProducts.name;
   centerImg.alt=centerRandomProducts.name;

    const rightIndex=randomNumber(0,Products.all.length-1);
    const rightRandomProducts=Products.all[rightIndex];
    rightImg.src=rightRandomProducts.path;
    rightImg.title=rightRandomProducts.name;
    rightImg.alt=rightRandomProducts.name;
}
 imgSection.addEventListener('click',clickHandler);

 function clickHandler(event){
    if (event.target.id === 'leftImg' || event.target.id === 'centerImg' || event.target.id === 'rightImg'){
      for(let i=0;i<Products.all.length;i++){
        Products.all[i].numberOfRounds++;
        if(Products.all[i].numberOfRounds===25){
            leftImg.removeEventListener('click',clickHandler);
            centerImg.removeEventListener('click',clickHandler);
            rightImg.removeEventListener('click',clickHandler);
          }
        if (Products.all[i].name === event.target.title){
            Products.all[i].votes++;
          console.table(Products.all[i])
        }
      }
      render();
    }
}    
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  render();