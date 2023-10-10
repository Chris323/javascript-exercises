const removeFromArray = function(arr, ...nums) {
    let finalArr = [];
    for (let i of arr){
        //Checks for item from arr in nums rest arg
        if(!nums.includes(i)){
            finalArr.push(i);
        }
    }
    return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
