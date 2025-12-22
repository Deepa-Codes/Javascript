
let input = document.querySelector('.input-field')
function addValue(value){
input.value +=value;
}

function evaluateValue(){
    console.log('evaluate');
    input.value= eval(input.value);
}
 
function clearValue(){
input.value ="";
}

function deleteValue(){
    let value = input.value
    input.value = value.slice(0, value.length-1)
}

window.addValue = addValue;
window.clearValue = clearValue;
window.deleteValue = deleteValue;
window.evaluateValue = evaluateValue;