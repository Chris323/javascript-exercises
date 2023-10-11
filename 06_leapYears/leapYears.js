const leapYears = function(yearIn) {
    if((yearIn%400 !== 0) && (yearIn%100 === 0)){
        return false;

    }
    if(yearIn%4 === 0){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
