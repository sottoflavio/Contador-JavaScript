var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var disabilitasub = document.getElementById("subtrair").disabled = false;

function increment(){
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber > 0){
        var cor  = document.getElementById("currentNumber");
        cor.style.color = 'green';
    }
}

function decrement(){
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0){
        var cor  = document.getElementById("currentNumber");
        cor.style.color = 'red';
    }
    if (currentNumber < -9){
        disabilitasub.disabled = true;
    }
}