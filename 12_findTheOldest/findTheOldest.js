
const findTheOldest = function(input) {
    return input.reduce((oldest, current) =>{
        const ageOfOldest = oldest.yearOfDeath - oldest.yearOfBirth;
        const ageOfCurrent = current.yearOfDeath - current.yearOfBirth;

        if(ageOfCurrent>ageOfOldest){
            return current
        }else{
            return oldest
        }
    }, input[0])

};

// Do not edit below this line
module.exports = findTheOldest;
