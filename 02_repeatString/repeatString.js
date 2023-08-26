const repeatString = function(word, repeatNumber) {
    let output = ""
    for(let i=0; i<repeatNumber; i++){
        output+=word
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
