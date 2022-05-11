/* 
——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— 
1. *Write a console.log statement saying "Hello World!" for each language that you know.
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
*/

console.log('Hello World'); //English International
console.log('اسلام و علیکم'); // URDU
console.log('سلام'); //Persian
console.log('أهلا وسهلًا / اسلام و علیکم '); //Arabic
console.log('Hej Världen'); //Swedish

/* 
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
2. *Consider the following code: console.log('I'm awesome');
Answer: SyntaxErro: Unexpected token ","
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
*/

console.log("I'm awesome");
console.log(`I'm awesome`);

/* 
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
3.0 Declare a variable x and initialize it with an integer, using these exact steps: 
3.1 * First, declare your variable x (do not initialize it yet).
3.2 Add a console.log statement that explains in words what you think the value of x is, like in this example:
3.3 Add a console.log statement that logs the value of x.
3.4 Now initialize your variable x with an integer.
3.5 Next, add a console.log statement that explains what you think the value of x is.
3.6 Add a console.log statement that logs the value of x.
Steps to be taken:
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
*/

let x; //declare a variable
console.log("The value of my 'x' variable is undefined");
console.log('x');
x = 50;
console.log(`The value of 'x'is 50 which is primative number data type`);
console.log(x);

/*
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
4.0 Declare a variable y and assign a string to it.
4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
4.2 Now console.log the variable y.
4.3 Now assign a new string to the variable y.
4.4 Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
4.5 Now console.log y again.
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
*/

let y = 'String';
console.log(
  'The y ' + y + ` is a sequence of characters which always have to write as either a Single quote (''), Double quote ("") or backtick for multiple/dynamic lines`
);

console.log(y);
y = 100;

console.log(
  'Before my Y variable was a string then re-assigning the value to it/Mutate the variable from sting to a number. ' +
    typeof y
);

/*
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
5.1 Declare a variable z and assign the number 7.25 to it.
5.2 console.log z.
5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
5.4 console.log a.
5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
5.6 console.log the highest value.
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
*/

// 5.0 I will round the number by using math round function.
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
const higherValue = z > a? z : a;
console.log(higherValue);

/*
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
Arrays
6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See Naming conventions).
6.2 Write a console.log statement that explains in words what you think the value of the array is.
6.3 console.log your array.
6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
6.5 Log your array.
6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
6.7 Log your new array!
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
*/

let animals = [];
console.log(`An "array" is a special type of variable. It doesn't only store one value; it store list of value. 

Array are especially helpful when we don't know how many items a list will contain.

Currentyl the value of Array is Empty`);

console.log(animals);
let myFavAnimal = ['Horse', 'Leopard', 'Fox'];
console.log(myFavAnimal);
myFavAnimal[2]= "baby pig";
console.log(myFavAnimal);


/*
——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— 
7. More strings
Let's consider the following string: let myString = "this is a test".
7.1 Add the string to your file and console.log it.
7.2 Find a way to get the length of myString.
7.3 console.log the length of myString.
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
*/

const myString ="this is a test";
console.log(myString);
console.log(`length of my String is ${myString.length}`);

/*
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
8.1 First declare at least four variables and assign them different data types.
8.2 For each variable write a console.log statement that logs the value

8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
8.4 Now use typeof to log the actual type of your variables.
8.5 Now compare the types of your different variables with one another.
8.6 Make sure to also show a message when the variables you are comparing are not the same type.
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
*/

let data1 = 100;
let data2 = "string";
let data3 = true;
let data4 = ['red', 'white'];

console.log('The value of my variable typeOfNum is: ' + data1);
console.log(typeof data1);

console.log('The value of my variable typeOfNum is: ' + data2);
console.log(typeof data2);

console.log('The value of my variable typeOfNum is: ' + data3);
console.log(typeof data3);

console.log('The value of my variable typeOfNum is: ' + data4);
console.log(typeof data4);

if (typeof(data1)===typeof(data2)){
    console.log('data1 and data2 are same types of variable')
    }
else{
  console.log('data1 and data2 are not the same types of variable')
}

if (typeof(data2)===typeof(data3)){
    console.log('data2 and data3 are the same types of variable')
    }
else{
  console.log('data2 and data3 are not the same types of variable')
}

/*
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
9.1 Add at least 3 console.log statements in which you show that you understand what % does.
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
*/

let b=7;
b = b % 3;
console.log("Remainder/modulo operator goes into 7 twice and leave the 1 left over");

let c = 26 % 6;
console.log(c);

let d = 23 % 5;
console.log(d);

let e = 13 % 9;
console.log(e);

/*
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
10. Write a program to answer the following questions:
10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).
———————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
*/

let multiple=[10, 20, "Red", "white"];
console.log(multiple);
console.log(`Yes the array sting can contain differnt types data`)

let compareInfinit  = 6 / 0 === 10 / 0 ? 'Yes the infinities are compareable' : 'No the infinities are compareable';
console.log(compareInfinit);

