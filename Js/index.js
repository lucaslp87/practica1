let btnLeft = document.querySelector(".btn-left");
let btnRight = document.querySelector(".btn-right");
let slider = document.querySelector("#slider");
let sliderSection=document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", ()=> moveToLeft());
btnRight.addEventListener("click", ()=> moveToRight());

let operacion=0;
let counter =0;
let widthImg= 100/sliderSection.length;

document.addEventListener("DOMContentLoaded",function() {
    let navLinks = document.querySelectorAll(".nav-links a");
    let buttonContacto= document.querySelector(".btn-contacto");

    buttonContacto.addEventListener("click", ()=> {
        let hrefContacto = buttonContacto.getAttribute('href').substring(1);

        let contactoClass = document.querySelector(`.${hrefContacto}`);

        if(contactoClass){
            contactoClass.scrollIntoView({behavior: 'smooth'});
        }

    })
    navLinks.forEach(link => {
        link.addEventListener("click" , (event) => {
            event.preventDefault();

            let targetClass = link.getAttribute('href').substring(1);

            let targetSection = document.querySelector(`.${targetClass}`);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

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