// Grabs a number to use from the user, makes sure it's an integer and not a string/floating point number
let answer = parseInt(prompt('Please input a number:', '0'));

// Starts at 1, goes to the number provided, inclusive. Could have done if/elseif, but switch is cleaner imo
for (i = 1; i <= answer; i++) {
  switch (true) {
    case i % 3 === 0 && i % 5 === 0:
      console.log('FizzBuzz');
      break;
    case i % 3 === 0:
      console.log('Fizz');
      break;
    case i % 5 === 0:
      console.log('Buzz');
      break;
    default:
      console.log(i);
  }
}