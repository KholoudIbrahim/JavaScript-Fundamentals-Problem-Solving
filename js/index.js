/* 
1- Write a program that allow to user enter number then printit

Example
Input: 5
Output: 5 
*/

/* -----------------------================== Solution ==================== ----------------------- */

// var userInput = Number(window.prompt("Please enter a number:"));

// console.log("The number is: ",userInput);



/* 
2- Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no

Example 1
Input: 12 Output Yes
Example 2
Input: 9 Output No 
*/

/* -----------------------================== Solution ==================== ----------------------- */

// var number = Number(window.prompt("Please enter a number:"));

// if (number % 3 === 0 && number % 4 === 0)
// {
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }




/* 
3- Write a program that allows the user to insert 2 integers then print the max
Example 1
Input: 3 5
Output: 5
Example 2
Input: 10 7
Output: 10
*/

/* -----------------------================== Solution ==================== ----------------------- */

// var number1 = Number(window.prompt("Please enter the first number:"));
// var number2 = Number(window.prompt("Please enter the second number:"));


// if (number1 > number2)
// {
//     console.log(number1);
// }
// else if (number2 > number1){
//     console.log(number2);
// }
// else {
//     console.log("Number",number1,"and",number2,"are equal");
// }




/* 
4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.

Example 1
Input: -5
Output negative
Example 2
Input: 10
Output positive
*/

/* -----------------------================== Solution ==================== ----------------------- */

// var number = Number(window.prompt("Please enter a number:"));

// if (0 > number)
// {
//     console.log("Negative");
// }
// else {
//     console.log("Positive");
// }



/* 
5- Write a program that take 3 integers from user then print the max element
and the min element.

Example 1
Input:7,8,5
Output:
max element = 8
min element = 5

Example 2
Input: 3 6 9
Outputs:
Max element = 9
Min element = 3
*/

/* -----------------------================== Solution ==================== ----------------------- */

// var num1 = Number(window.prompt("Please enter the first number:"));
// var num2 = Number(window.prompt("Please enter the second number:"));
// var num3 = Number(window.prompt("Please enter the third number:"));

// var max = 0;
// var min = 0;

// if (num1 > num2 && num1 > num3)
// {
//     max = num1;
//     console.log("Max element = ",max);

//     if (num2 > num3)
//     {
//         min = num3;
//         console.log("\nMinimum element = ",min);
//     }
//     else if (num3 > num2)
//     {
//         min = num2;
//         console.log("\nMinimum element = ",min);
//     }
//     else {
//         min=num2;
//         console.log("Minimum element = ",min,"\nNote: Second and Third element are equal");
//     }
// }


// if (num2 > num1 && num2 > num3)
// {
//     max = num2;
//     console.log("Max element = ",max);
    
//     if (num1 > num3)
//     {
//         min = num3;
//         console.log("\nMinimum element = ",min);

//     }
//     else if (num3 > num1)
//     {
//         min = num1;
//         console.log("\nMinimum element = ",min);
//     }
// }


// if (num3 > num1 && num3 > num2)
// {
//     max = num3;
//     console.log("Max element = ",max);
    
//     if (num1 > num2)
//     {
//         min = num2;
//         console.log("\nMinimum element = ",min);

//     }
//     else if (num2 > num1)
//     {
//         min = num1;
//         console.log("\nMinimum element = ",min);
//     }
// }


// else if (num1 === num2 && num1 === num3){
//     console.log("The three elements are of value",num1,"and are equal");

// }


/* 
6- Write a program that allows the user to insert integer number then
check If a number is oven or odd

Example 1
Input: 8
Output: even

Example 2
Input: 7
Output: odd
*/

/* -----------------------================== Solution ==================== ----------------------- */

// var number = Number(window.prompt("Please enter the integer number:"));


// if (number % 2 == 0)
// {
//     console.log("Even");
// }
// else {
//     console.log("Odd");
// }



/* 
8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant

Example1
Input: O
Output: vowel

Example 2
Input: b
Output:
Consonant
*/

/* -----------------------================== Solution ==================== ----------------------- */

// var charInput = window.prompt("Please enter a character:");

// if (charInput == "a" ||charInput == "A" || charInput == "e" || charInput == "E" ||charInput ==  "i" || charInput == "I" ||charInput ==  "o" || charInput == "O" || charInput == "u" || charInput == "U")
// {
//     console.log("Vowel");
    
// }
// else
// {
//     console.log("Consonant");
// }

/* 
9- Write a program that allows user to insert integer then print all numbers between 1 to
that’s number

Example Input 5
Output 1, 2, 3, 4, 5
*/

/* -----------------------================== Solution ==================== ----------------------- */

// var number = Number(window.prompt("Please enter the integer number:"));

// for (var i = 1; i<=number; i++)
// {
//     console.log(i);
// }



/* 
10- Write a program that allows userto insert integer then print a multiplication table up to 12.

Example
Input: 5
Outputs:
5 10 15 20 25 30 35 40 45 50 55 60
*/

/* -----------------------================== Solution ==================== ----------------------- */


// var number = Number(window.prompt("Please enter the integer number:"));

// for (var i = 1; i<=12; i++)
// {
//     console.log(i*number);
// }



/* 
11- Write a program that allows to user to insert number then print all even numbers
// between 1 to this number
// Example:
// Input: 15
// Output: 2 4 6 8 10 12 14
*/

/* -----------------------================== Solution ==================== ----------------------- */

// var number = Number(window.prompt("Please enter the integer number:"));

// for (var i = 1; i<=number; i++)
// {
//     if(i % 2 == 0){
//         console.log(i);
//     }

// }


/* 
12- Write a program that take two integers then print the power

Example:
Input: 4 3
Output: 64
Hint how to calculate 4^3 = 4 * 4 * 4 =64
*/

/* -----------------------================== Solution ==================== ----------------------- */
// var num1 = Number(window.prompt("Please enter the first integer number:"));
// var num2 = Number(window.prompt("Please enter the second integer number:"));
// var mul=1;

// for (var i = 1; i<=num2; i++)
// {
//     mul*=num1;
// }

// console.log(mul);



/* 
12- Write a program to enter marks of five subjects and calculate total, average and
percentage.

Example
Input: - Enter Marks of five subjects:
95
76
58
90
89

Output:-
Total marks = 408
Average Marks =81.6
Percentage =81.6
*/

/* -----------------------================== Solution ==================== ----------------------- */

// var num1 = Number(window.prompt("Please enter the first subject marks:"));
// var num2 = Number(window.prompt("Please enter the second subject marks:"));
// var num3 = Number(window.prompt("Please enter the third subject marks:"));
// var num4 = Number(window.prompt("Please enter the fourth subject marks:"));
// var num5 = Number(window.prompt("Please enter the fifth subject marks:"));

// var sum=0;
// var average=0;
// var percentage=0;

// sum=num1+num2+num3+num4+num5;
// console.log("Total marks =",sum);

// average = sum / 5;
// console.log("Average marks =",average);

// percentage = (sum / 500) * 100;
// console.log("Percentage =",percentage,"%");




/* 
13-Write a program to input month number and print number of days in that
month.

Example:
Input: - Month Number: 1
Output:-. Days in Month: 31
*/

/* -----------------------================== Solution ==================== ----------------------- */

// var monthNum = Number(window.prompt("Please enter the month number:"));

// if (monthNum == 1 || monthNum == 3 || monthNum == 5 || monthNum == 7 || monthNum == 8 || monthNum == 10 || monthNum == 12)
// [
//     console.log("Days in Month: 31 ")
// ]
// else if (monthNum == 4 || monthNum == 6 || monthNum == 9 || monthNum == 11)
// [
//     console.log("Days in Month: 30")
// ]
// else if (monthNum == 2) {
//     console.log("Days in Month: 28/29 "); 
// }
// else {
//     console.log("Invalid input"); 

// }





/* 14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade
Percentage >= 90%: Grad A
Percentage >= 80%: Grad B
Percentage >= 70%: Grad C
Percentage >= 60%: Grad D
Percentage >= 40%: Grad E
Percentage < 40%: Grad F
*/

/* -----------------------================== Solution ==================== ----------------------- */

// var num1 = Number(window.prompt("Please enter the first subject marks:"));
// var num2 = Number(window.prompt("Please enter the second subject marks:"));
// var num3 = Number(window.prompt("Please enter the third subject marks:"));
// var num4 = Number(window.prompt("Please enter the fourth subject marks:"));
// var num5 = Number(window.prompt("Please enter the fifth subject marks:"));

// var sum=0;
// var average=0;
// var percentage=0;

// sum=num1+num2+num3+num4+num5;
// console.log("Total marks =",sum);

// average = sum / 5;
// console.log("Average marks =",average);

// percentage = (sum / 500) * 100;
// console.log("Percentage =",percentage,"%");

// /*or this answer*/

// /*var num5 = Number(window.prompt("Please enter the percentage:"));*/

// if (percentage >= 90)
// {
//     console.log("Grade A");

// }
// else if (percentage >= 80)
// {
//     console.log("Grade B");

// }
// else if (percentage >= 70)
// {
//     console.log("Grade C");

// }
// else if (percentage >= 60)
// {
//     console.log("Grade D");

// }
// else if (percentage  >= 40)
// {
//     console.log("Grade E");

// }
// else {
//     console.log("Grade F");
// }

// ******************************** Using switch case*******************************

/* 
15- Write a program to print total number of days in month 
*/

// var month = window.prompt("Please write the month:");

// switch (month) {
//     case "January":
//     case "March":
//     case "May":
//     case "July":
//     case "August":
//     case "October":
//     case "December":
//         console.log("31");
//         break;
//     case "February":
//         console.log("28 or 29");
//         break;
//     default:
//         console.log("30");
// }

/* 16- Write a program to check whether an alphabet is vowel or consonant */



// var charInput = window.prompt("Please enter a character:");

// switch(charInput)
// {
// case "a":
// case "A":
// case "e":
// case "E": 
// case "i": 
// case "I": 
// case "o": 
// case "O": 
// case "u":
// case "U":
//     console.log("Vowel");
//     break;
// default:
//     console.log("Consonant");
// }

// 17- Write a program to find maximum between two numbers

// var number1 = Number(window.prompt("Please enter the first number:"));
// var number2 = Number(window.prompt("Please enter the second number:"));

// switch(true){
// case number1 > number2:
//     console.log("Max:",number1);
//     break;

// case number2 > number1:
//     console.log("Max:",number2);
//     break;
// default:
//     console.log("Number",number1,"and",number2,"are equal");
// }



// 18- Write a program to check whether a number is even or odd

// var number = Number(window.prompt("Please enter the integer number:"));


// switch(true)
// {
// case number % 2 == 0:
//     console.log("Even");
//     break;
// case number % 2 ==1:
//     console.log("Odd");
//     break;
// default:
//     console.log("Invalid Input");
// }

// 19- Write a program to check whether a number is positive or negative or zero


// var number = Number(window.prompt("Please enter the integer number:"));


// switch(true)
// {
// case number > 0:
//     console.log("Positive");
//     break;
// case number < 0:
//     console.log("Negative");
//     break;
// case number === 0:
//     console.log("Zero");
//     break;
// default:
//     console.log("Invalid Input");
// }


// 20- Write a program to create Simple Calculator 


// var operation= window.prompt("Please write the desired operation\n+\n-\n*\n/ ");
// var num1 = Number(window.prompt("Please enter the first number:"));
// var num2 = Number(window.prompt("Please enter the second number:"));


// switch(operation)
// {
// case "+" :
//     console.log(num1,"+",num2,"=",num1+num2);
//     break;
// case "-":
//     console.log(num1,"-",num2,"=",num1-num2);
//     break;
// case "*":
//     console.log(num1,"*",num2,"=",num1*num2);
//     break;
// case "/":
//     console.log(num1,"/",num2,"=",num1/num2);
//     break;
// default:
//     console.log("Invalid Input");
// }
