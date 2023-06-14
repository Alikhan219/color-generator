const color= [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];


const btn= document.querySelector(".btn");
const col= document.querySelector(".col");


btn.addEventListener('click',  function(){
    let choose= "#";
    for(i=0; i<6; i++){
        choose += color[randomColor()];
    }
        col.textContent= choose;
        document.body.style.backgroundColor= choose;
   
})

function randomColor(){
    return Math.floor(Math.random() * color.length);
}