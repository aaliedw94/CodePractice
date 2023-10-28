// Write your code below

//array to put the factorized version of the given number into. Ex: 12 = 2, 2, 3
/*var primeFactors = [];
var arrayFactors = [];
var addprimes = 0;
var adddivisors = 0;
var mult_primes = 1; All test code*/

let i = 0; //iterable variable

//This will split numbers into their factorized version as explained in the first comment (i.e. 12 = 2,2, 3; 15 = 3, 5)
function PrimeFactorization(num, myarray) {
  //while the number to be factorized is greater than 1
  while (num > 1) {
    //starting the iteration at 2
    for(let factoredNum = 2; factoredNum <= num; factoredNum++) {
        while (num % factoredNum === 0) {
          myarray[i] = factoredNum; //adding the factored number to the factorization array
          num = num / factoredNum;
          i++;
        }
    }
  }
  //if the factorization only leaves the number itself, add 1 to its factorization
  if (myarray.length === 1) {
          myarray.unshift(1);
  }
  return myarray;
} //progress is good, numbers are factoring correctly...(04:28a, 10/28)

//Testing the function
let numtest = []
var num2 = prompt("Enter Number: ");
PrimeFactorization(num2, numtest);
console.log(numtest);

//66 -> 1, 2, 3, 6, 11, 22, 33, 66 = 144 Need this next

//This function will take the number's factorization array, then add them
function addPrimes(add_prime, myarray) {
  //add_prime will always start off as 0, since we're adding the elements of the array
  for (let a = 0; a < myarray.length; a++) {
    add_prime = add_prime + myarray[a];
  }
  return add_prime;
}

/*Testing the function above
var l = 0;
var test = addPrimes(l, numtest);
console.log(test); //working to add the factorization of a number*/

//time for function to find all divisors
function findDivisors(num2, myarray2) {
  let j = 0;
  //Starting from 1, will find all divisors by using modulo function if it equals 0
  for(let a = 1 ; a <= num2; a++) {
        if (num2 % a === 0) {
          myarray2[j] = a;
          j++;
        }
  }
  return myarray2;
}

/*console.log(findDivisors(num2));
//Working to find the divisors*/

//Adding the divisors now
function addDivisors(add_num, myarray) {
  for (let a = 0; a < myarray.length; a++) {
    add_num = add_num + myarray[a];
  }
  return add_num;
}

/*var test2 = addDivisors(arrayFactors);
console.log(test2); //Divisor addition is working

/*Now to divide the divisor sum and primeFactor sum.
var test3 = addDivisors(arrayFactors) / addPrimes(primeFactors);
console.log(test3); Code is working for this*/

//New variable initialization to put everything together

let r; //iterable variable for our numbers between min and max
let k = 0; //for final array, iterable variable
let primeArray_min = []; //array for prime factorization
let divisorArray1_min = []; //array for divisors //final array for all numbers that pass the test
let finalarray = [];

//num3 is the min number for the test, num4 is the max number for testing
function finalAnswer(num3, num4) {
  for(r = num3; r <= num4; r++) {
    var addprimes_min = 0; //variable for adding prime factorization
    var adddivisors_min = 0; //variable for adding all divisors
    var min_add = 0; //
    var min_add2 = 0;

    console.log("Value to be tested: " + r);
    console.log("Before PrimeFactorization:", primeArray_min);
    //console.log(primeArray_min.length);
    PrimeFactorization(r, primeArray_min); //Angry noises....Why?! It works correctly when testing the function as a standalone
    console.log(primeArray_min); 

    min_add = addPrimes(addprimes_min, primeArray_min);
    console.log(min_add);

    findDivisors(r, divisorArray1_min);
    console.log("Divisors of " + r + " are: " + divisorArray1_min);

    min_add2 = addDivisors(adddivisors_min, divisorArray1_min);
    console.log("Addition of all divisors: " + min_add2);
    divisorArray1_min.length = 0;

    //if the divisor sum is divisible by the factorization sum, then it passes the test and gets added to the final array
    if (min_add2 % min_add === 0) {
      finalarray.push(r);
    }
    primeArray_min.length = 0; //Emptying the prime factorization array to be reused for the next iteration
  }
  return finalarray; //return our final array showing which values between the min and max pass the test
}


var minNum = parseInt(prompt("Enter minimum value for testing: "));
var maxNum = parseInt(prompt("Enter maximum value for testing: "));
console.log("All values between these two numbers (inclusive), will be tested.");
console.log("The prime factorization will be found and added together. Then, all divisors will be found and added.");
console.log("The two values will be divided and if their division creates a whole integer, they pass the test and are added to the list.");
finalAnswer(minNum, maxNum); //running the function with our min and max values
console.log(finalarray); //printing our final array

//link to question on CodeWars: https://www.codewars.com/kata/562c04fc8546d8147b000039/discuss/javascript
