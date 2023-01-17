var button = document.querySelector("#button")
var img = document.querySelector("#img")
var indicator = document.querySelector("#indicator")

var i = 1;
function carrossel(){  
    i++
    if(i > 3){
        i = 1
    };
    if (i == 1){
        img.setAttribute('src', './img/carro-01.jpg')
        indicator.setAttribute('src', './assets/indicator-01.svg')
    }else if(i == 2){
        img.setAttribute('src', './img/carro-02.jpg')
        indicator.setAttribute('src', './assets/indicator-02.svg')
    }else if(i == 3){
        img.setAttribute('src', './img/carro-03.jpg')
        indicator.setAttribute('src', './assets/indicator-03.svg')
    }
}

button.addEventListener("click",()=>{
    carrossel()
});





var buttonEfect2 = document.querySelector("#button-efect-02")
var carThree = document.querySelector("#three")
var carTwo = document.querySelector("#two")
var carOne = document.querySelector("#one")

var iEfect2 = 1
function carrosselEfect2(){
    iEfect2++
    if(iEfect2 > 3){
        iEfect2 = 1
    };
    
    if(iEfect2 == 2){
        carThree.style.transform = "translateX(640px)"
    }else if(iEfect2 == 3){
        carTwo.style.transform = "translateX(640px)"
    }else if (iEfect2 == 1){
        carThree.style.transform = "translateX(0px)"
        carTwo.style.transform = "translateX(0px)"
    }

}


buttonEfect2.addEventListener("click", ()=>{
    carrosselEfect2()
})