const sumAll = function(rangeMin, rangeMax) {
    let output = 0;
    for(let i = rangeMin; i<=rangeMax; i++){
        output+=i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
