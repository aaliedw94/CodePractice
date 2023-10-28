I attempted this question from CodeWars. I created all of the functions for each portion seperately and tested them.
The idea is that we take two numbers, min and max, and then see if all values between, and inclusive, of the two pass a test.
The test is that we find the prime factorization (i.e. 12 = 2, 2, 3; 15 = 3, 5) of a value and add the resulting numbers together;Then, we find all divisors 
of the value(i.e. 12 = 1, 2, 3, 4, 6, 12) and add these together as well. After this, we divide the sum of the divisors by the sum of the prime factors.
If the resulting number is a whole number, then it passes the test and gets added to the list. 
All numbers between the min and max designated by the user go through this test and the resulting list is printed.
The functions worked just fine during unit testing. When implementing them into my final function where users will enter the minimum and maximum numbers
for the range of testing, things went awry. My Prime Factorization function seems to be working improperly when used in the final function. 
It's adding "null" elements to my resulting array for the prime factorization.
This issue is causing issues with the final array being printed correctly, as the addition of the prime factorization of the values is not printing properly.
