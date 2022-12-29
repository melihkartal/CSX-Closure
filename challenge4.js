// Now we are going to create a function addByX that returns a function that will add an input by x.

function addByX(number){
    function inner(input){
          return input + number;
    }
    return inner;
  }
  const addByTwo = addByX(2);
  
  console.log(addByTwo(1));
  console.log(addByTwo(2));
  console.log(addByTwo(3));
  