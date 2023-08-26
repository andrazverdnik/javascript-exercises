const reverseString = function(word) {
    let wordArray = word.split("")
    wordArray = wordArray.reverse();
    let output = wordArray.join("")
    return output;
};

// Do not edit below this line
module.exports = reverseString;
