const add = function(a, b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(input) {
	let output = 0
  for(let i = 0;i< input.length; i++){
    output = add(output, input[i])
  }
  return output;
};

const multiply = function(input) {
  let output = input[0]
  for(let i = 1;i< input.length; i++){
    output = output*input[i]
  }
  return output;
};

const power = function(base, power) {
	output = base
  for(let i = 1; i<power; i++){
    output = multiply([output, base])
  }
  return output;
};

const factorial = function(input) {
	let output = 1
  if(!input==0){
    for(i=0;i<input;i++){
      output = (i+1)*output
    }
    return output
  } else{
    return 1;
  }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
