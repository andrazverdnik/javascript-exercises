const palindromes = function (input) {
    input = input.replace(/[^a-z0-9]/gi, '')
    input = input.toLowerCase()
    let reverse = ((input.split("")).reverse()).join("")
    console.log(reverse)
    if(reverse == input){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
