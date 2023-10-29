let value_list = []; //empty array for the values to go into
let i = 0; //iterable variable for adding values to an array
do { //using a do while loop to gain the values that the user enters
  var values = parseInt(prompt("Please enter a list of values one by one between 1 and 100 (enter 0 or 101 when done): "));
  if (values > 0 && values <= 100) { //values have to be between 1 and 100, based on question criteria
  value_list.push(values);
  i++; }
} while (values > 0 && values <= 100 && value_list.length < 100 && value_list.length >= 1)
//console.log(list);
//console.log("List of values: " + value_list);

//This function set up will reverse the list of values that the user entered
function ReverseList(mylist) {
  let reverseList = [];
  for(let i = mylist.length - 1, j = 0; i >= 0, j < mylist.length; j++, i--) {
      reverseList[j] = mylist[i];
  }
  return reverseList;
}

/*console.log(ReverseList(list));
const num_list = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(ReverseList(num_list));*/

//variables below to print the explanation of the program along with the user input and both lists to the DOM.
const rules = document.getElementById("rules");
rules.innerHTML = "<p>The purpose of this program is for the user to enter a list of values, one by one<br> and then the list of values will be printed in reverse.</p>";
const printList = document.getElementById("list");
const list_vals = document.getElementById("list_vals");
/*for (let i = 0; i < value_list.length; i++) {
list_vals.innerHTML = "<p>" + value_list[i] + "</p><br>";
}* I attempted to print the list of values one by one on a new line, but couldn't get it to work*/
list.innerHTML = "<p>List of values entered: " + value_list + "</p>";
const output = document.getElementById("JSoutput");
output.innerHTML = "<p>This is your list in reverse order: " + ReverseList(value_list) + "</p>";
//Question is from https://www.hackerrank.com/challenges/fp-reverse-a-list/problem?isFullScreen=true
