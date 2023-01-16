var button = document.querySelector("#button")
var img = document.querySelector("#img")

button.addEventListener("click",()=>{
    carrossel()
});

var i = 1;
function carrossel(){  
    i++
    if(i > 3){
        i = 1
    };
    if (i == 1){
        img.setAttribute('src', './img/carro-01.jpg')
    }else if(i == 2){
        img.setAttribute('src', './img/carro-02.jpg')
    }else if(i == 3){
        img.setAttribute('src', './img/carro-03.jpg')
    }
}