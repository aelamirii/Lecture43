// Returns random from inclusive to exclusive.
function getRandomNumber(from, to) {
  return Math.random() * ( max - min ) + min;
}


// Return random odd or even number
function getRandomOddOrEven1to10(type, getRandomNumberGenerator) {

  var found = false;

  while(!found){

    var num = getRandomNumberGenerator(1 , 10);

    if(type === "odd")
    {
      if( num % 2 !== 0 ) { return num;}
    }
    else {
      if(num % 2 === 0 ) { return num;}
    }

  }


};
