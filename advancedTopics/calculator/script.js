var answer = document.querySelector('#display')
var total = ''
var value = ''
var decoy = ''
function press(input){
    if(answer.innerText == 0 || answer.innerText == decoy){
        answer.innerText = ""
    }
    answer.innerText = answer.innerText + input
}


function clr(){
    answer.innerText = 0
    total = ''
    value = ''
    decoy = ''
}

function setOP(method){
    total = total + answer.innerText + method
    decoy = answer.innerText
}   

function calculate(){
    total = total + answer.innerText
    console.log(total)
    value = eval(total)
    answer.innerText = value
}