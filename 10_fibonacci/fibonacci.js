const fibonacci = function(input) {
    let fibSequence = [0,1]
    let i=2
    if(input<0){
        return "OOPS"
    } else{
        input = parseInt(input)
        let length = input+2;
        while(i<length){
            fibSequence.push(fibSequence[i-2]+fibSequence[i-1])
            i=i+1
        }
        return fibSequence[fibSequence.length-2]
    }
    

};

// Do not edit below this line
module.exports = fibonacci;
