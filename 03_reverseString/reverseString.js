const reverseString = function(str) {
    answer = "";
    for(let i = str.length -1; i >= 0 ; i-- ){
        answer += str[i];
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
