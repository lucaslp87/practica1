let btnLeft = document.querySelector(".btn-left");
let btnRight = document.querySelector(".btn-right");
let slider = document.querySelector("#slider");
let sliderSection=document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", ()=> moveToLeft());
btnRight.addEventListener("click", ()=> moveToRight());

let operacion=0;
let counter =0;
let widthImg= 100/sliderSection.length;

function moveToRight(){
    if(counter>=sliderSection.length-1){
        counter=0;
        operacion=0;
        slider.style.transform= `translate(-${operacion}%)`;
        slider.style.transition=`all ease .6s`;
        return;
    }
    counter++;

    operacion=operacion + widthImg;
    slider.style.transform= `translate(-${operacion}%)`;
    slider.style.transition=`all ease .6s`;
}


function moveToLeft(){
    counter--;
    if(counter<0){
        counter=sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1);
        slider.style.transform= `translate(-${operacion}%)`;
        slider.style.transition=`all ease .6s`;
        return;
    }
    operacion=operacion - widthImg;
    slider.style.transform= `translate(-${operacion}%)`;
    slider.style.transition=`all ease .6s`;
}