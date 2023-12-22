const getTheTitles = function(arrayIn) {
    let finalArray = new Array(arrayIn.length);
    for(let i = 0; i < arrayIn.length; i++){
        finalArray.splice(i, 1, arrayIn[i].title);
    }
    return finalArray;
};


// Do not edit below this line
module.exports = getTheTitles;
