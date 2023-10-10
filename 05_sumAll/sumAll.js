const sumAll = function(num1, num2) {
    if((num1 < 0) || (num2 < 0) ){
        return "ERROR";
    }
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number')){
        return "ERROR";
    }
    let firstNum = num1;
    let secondNum = num2;
    if (num1 > num2){
        firstNum = num2;
        secondNum = num1;
    }
    let answer = 0;
    for(let i = firstNum; i <= secondNum; i++){
        answer += i;
    }
    return answer;

};

// Do not edit below this line
module.exports = sumAll;
