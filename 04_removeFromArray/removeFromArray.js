const removeFromArray = function(array, ...args) {
    let output = []
    array.forEach(item => {
        if (!args.includes(item)){
            output.push(item);
        }
    })
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
