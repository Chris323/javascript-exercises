const fibonacci = function(input) {
    if(input <= 0 ){
        return 'OOPS';
    }
    if( input === 1 || input === 2){
        return 1;
    }
    let myArray = new Array(Number(input));
    let firstNum = 1;
    let nextNum = 1;

    for (let i = 0; i < input; i++){
        if( i === 0 || i === 1){
            myArray.splice(i, 1, 1);
            console.log('after splice/insert', myArray[i]);
            continue;
        }
        if(i >= 2){
            let insert = myArray[i - 1] + myArray[i - 2];
            console.log('insert', insert);
            myArray.splice(i, 1, insert);
            console.log('result', myArray[i]);
        }
    }
    return myArray[myArray.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
