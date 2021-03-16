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
    Products.all.push(this);
}
// array img
Products.all=[];
for(let i=0;i<names.length;i++){
    new Products(names[i]);
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//[0,1,2,....,19]
 function render(){
   const leftIndex=randomNumber(0,Products.all.length-1);
   const leftRandomProducts=Products.all[leftIndex];
   leftImg.src=leftRandomProducts.path;
   leftImg.title=leftRandomProducts.name;
   leftImg.alt=leftRandomProducts.name;
   leftRandomProducts.views++;

   const centerIndex=randomNumber(0,Products.all.length-1);
   if(centerIndex != leftIndex){
   const centerRandomProducts=Products.all[centerIndex];
   centerImg.src=centerRandomProducts.path;
   centerImg.title=centerRandomProducts.name;
   centerImg.alt=centerRandomProducts.name;
   centerRandomProducts.views++;
   }
    const rightIndex=randomNumber(0,Products.all.length-1);
    if(rightIndex != leftIndex && rightIndex != centerIndex){
    const rightRandomProducts=Products.all[rightIndex];
    rightImg.src=rightRandomProducts.path;
    rightImg.title=rightRandomProducts.name;
    rightImg.alt=rightRandomProducts.name;
    rightRandomProducts.views++;
    }
}
render();
//event
 let uservotes=alert('Please choose the product you like :)');
 let ListResult=document.getElementById('ListResult');
 let rounds=25;
 let counter=0;

 imgSection.addEventListener('click',clickHandler);

 function clickHandler(event){
    if (event.target.id === 'leftImg' || event.target.id === 'centerImg' || event.target.id === 'rightImg'){
      for(let i=0;i<Products.all.length;i++){
        if (Products.all[i].name === event.target.title){
            Products.all[i].votes++;
            counter++;
          console.table(Products.all[i]);
        }
      }
    }
      render();

    if(counter===rounds){
      imgSection.removeEventListener('Chart',clickHandler);
      ShowResults();
    }      
      function ShowResults(event){
      let CCart=document.getElementById('CChart');
      let CChart={
      
      type:'bar',
      data:{
        label:'views',
     datasets:[{
       backgroundColor:'#3cb44b',
       data:'views',
     },
    {
     label:'votes',
     data:'votes',
    }]
      }

      }
      let chart = new Chart(CCart, CChart);

      }

    }
  