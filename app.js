const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const resultElement = document.getElementById('result')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const increaseBtn = document.getElementById('increase')
const divideBtn = document.getElementById('divide')
let action = ''
const error = 'На 0 делить нельзя'

plusBtn.onclick = function(){
    action = '+'
}
minusBtn.onclick = function(){
    action = '-'
}
increaseBtn.onclick = function(){
    action = '*'
}
divideBtn.onclick = function(){
    action = '/'
}

function printResult(result){
    if(result < 0){
        resultElement.style.color = 'red' 
    }else{
        resultElement.style.color = 'green' 
    }
    resultElement.textContent = result    
}

function computeNumberWithAction(num1, num2, actionSimbol){
    const number1 = Number(num1.value)
    const number2 = Number(num2.value)
    if(actionSimbol == '+'){
        return number1 + number2
    }else if(actionSimbol == '-'){
        return number1 - number2
    }else if(actionSimbol == '*'){
        return number1 * number2
    }else if(actionSimbol == '/') {
        return number1 / number2
    }

}

submitBtn.onclick = function(){
    const result = computeNumberWithAction(num1, num2, action)
    printResult(result)
   
}