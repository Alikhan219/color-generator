const color= ["red","lightblue","deepskyblue","green","orange"];

const btn= document.querySelector(".btn");

const col= document.querySelector(".col");


btn.addEventListener('click', function(){
    let choose= randomColors();
    col.textContent= color[choose];
    document.body.style.backgroundColor= color[choose];
})

function randomColors(){
    return Math.floor(Math.random() * color.length)
}