// function that takes an array and returns the first two values of the array
function returnFirstTwoDrivers(firstTwo) {
        return firstTwo.slice(0, 2);
  }
  const firstTwo = ['Antonia', 'Nuru', 'Amari', 'Mo']; //moving this inside the function leads to error
  console.log(returnFirstTwoDrivers(firstTwo));


  
  // function that takes an array and returns the last two values of the array
  function returnLastTwoDrivers(lastTwo){
        return lastTwo.slice(2);
  }
  const lastTwo = ['Antonia', 'Nuru', 'Amari', 'Mo']; //moving this inside the function leads to error
  console.log(returnLastTwoDrivers(lastTwo));
   

  // array holding selecting drivers functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  // function multiplying fare
  function createFareMultiplier(multiplier) {
      return function(fare) {
        return fare * multiplier;
      };
    }
    // function doubling fare
    const fareDoubler = function(fare) {
      return fare * 2;
    };

    // function tripling fare
    const fareTripler = function(fare){
      return fare * 3;
    };


    const selectDifferentDrivers = function(drivers, selectionFunction) {
      return selectionFunction(drivers);
    };
    
