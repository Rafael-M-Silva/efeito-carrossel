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