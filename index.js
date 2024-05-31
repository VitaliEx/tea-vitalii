// Helper function to calculate the square of a number
function square(number) {
    return number * number;
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to generate a random number between a specified range
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Main function to demonstrate the helper functions
  function main() {
    console.log("Square of 5:", square(5));
    
    if (isEven(8)) {
      console.log("8 is even.");
    } else {
      console.log("8 is odd.");
    }
    
    console.log("Random number between 1 and 10:", getRandomNumber(1, 10));
  }
  
  // Call the main function to execute the code
  main();