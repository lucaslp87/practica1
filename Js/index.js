let btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector("#slider"),
    sliderSection=document.querySelectorAll(".slider-section"),
    btnUbicacion=document.querySelector(".btn-ubicacion"),
    articleBienvenida=document.querySelector(".bienvenida");

document.addEventListener("DOMContentLoaded", scrolleo);
btnLeft.addEventListener("click", moveToLeft);
btnRight.addEventListener("click", moveToRight);
btnUbicacion.addEventListener("click", ()=>{
    window.open("https://maps.app.goo.gl/shjhoQg7nBvBED7EA");   
})

setTimeout(()=>{
    articleBienvenida.classList.add("oculto");

}, "3000"); 

let operacion=0;
let counter =0;
let widthImg= 100/sliderSection.length;


function scrolleo(){
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
};

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