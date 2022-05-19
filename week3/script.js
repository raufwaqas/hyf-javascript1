/* 
————————————————————————————————————————————————————————————————————————————————— 
1. Strings!
1.1 Add the string to your file and log it.
1.2 Log the length of myString.
1.3 The commas make that the sentence is quite hard to read. Find a way to remove
 the commas from the string and replace them with spaces.
1.4 Log myString to see if you succeeded.
————————————————————————————————————————————————————————————————————————————————— 
*/
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
// Find a way to remove the commas from the string and replace them with spaces.
console.log(myString.replace(/,/g, " "));

/* 
————————————————————————————————————————————————————————————————————————————————— 
2. Arrays! Consider the following array:
————————————————————————————————————————————————————————————————————————————————— 
*/
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
let MauroFavoriteAnimals = ["turtle", favoriteAnimals];
console.log(MauroFavoriteAnimals);
let jimFavoriteAnimals = [favoriteAnimals.slice(0, 1), "Meerkat", favoriteAnimals.slice(1, 3)];
console.log(`I used slice method which add and subtract Jim Favorite animal without effecting *favoriteAnimal Array*`)
console.log(jimFavoriteAnimals);
console.log(favoriteAnimals.length);
let jasonFavoriteAnimal = [favoriteAnimals.slice(0, 2)]
console.log(jasonFavoriteAnimal);
let indexOfJimFav = jimFavoriteAnimals.indexOf("Meerkat");
console.log("The item you are looking for is at index: " + indexOfJimFav);
console.log(favoriteAnimals);

/* 
————————————————————————————————————————————————————————————————————————————————— 
More JavaScript
Create a function that takes 3 arguments and returns the sum of the these arguments.
————————————————————————————————————————————————————————————————————————————————— 
*/
function tournament(group1, group2, group3) {
    let matches = (group1 + group2 + group3);
    let countMatches = [matches];
    return countMatches;
}

group1Matches = tournament[0] = (4);
group2Matches = tournament[1] = (6);
group3Matches = tournament[2] = (8);

let totalMatches = (group1Matches + group2Matches + group3Matches);
console.log(totalMatches + ` Matches played in the whole torunament`);


/* 
————————————————————————————————————————————————————————————————————————————————— 
More JavaScript
Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
————————————————————————————————————————————————————————————————————————————————— 
*/

function colorCar(color) {
    return ('A ' + color + ' car.');
}
colorCar('Silver');


/* 
————————————————————————————————————————————————————————————————————————————————— 
More JavaScript
Create an object and a function that takes the object as a parameter and prints 
out all of its properties and values.
————————————————————————————————————————————————————————————————————————————————— 
*/
const country = {
    country: `Sweden`,
    capitalCity: `Stockholm`,
    population: `11 Million`,
    language: `Swedish`,
};

for (let entries of Object.entries(country)) {
    console.log(entries);
};

/* 
————————————————————————————————————————————————————————————————————————————————— 
// Create a function named vehicleType that receives a color, and a code, 
1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when 
called as vehicleType("blue", 2)
————————————————————————————————————————————————————————————————————————————————— 
*/
let vehicleType = function (color, code) {
    let type = "";
    if (code === 1) {
        type = "Car";
    }
    else if (code === 2) {
        type = "Motorbike"
    } else {
        type = "vehicle no longer exists. "
    }
    let chooseVehicle = "A " + color + " " + type;
    console.log(chooseVehicle);
    return chooseVehicle;
}
vehicleType("Blue", 1);

// 
/* 
————————————————————————————————————————————————————————————————————————————————— 
Can you write the following without the if statement, 
but with just as a single line with console.log(...);?
————————————————————————————————————————————————————————————————————————————————— 
*/

console.log(3 === 3 ? "yes" : "no");


/* 
————————————————————————————————————————————————————————————————————————————————— 
Create a function called vehicle, like before, but takes another parameter called 
age, so that vehicle("blue", 1, 5) prints 'a blue used car'
————————————————————————————————————————————————————————————————————————————————— 
*/
function vehicle(color, code, age) {
    let carCondition;
    if (age < 1) {
        carCondition = " New "
    } else {
        carCondition = " used "
    };
    if (code === 1) {
        return (`A ` + color + carCondition + `Car`);
    } else if (code === 2) {
        return (`A ` + color + carCondition + `Motorbike`);
    } else {
        return "vehicle no longer exists."
    };
}
console.log(vehicle(`blue`, 1, 5));


/* 
————————————————————————————————————————————————————————————————————————————————— 
Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
————————————————————————————————————————————————————————————————————————————————— 
*/

let vehicles = ["motorbike", "caravan", "car", "bike", "scooter"];

/* 
————————————————————————————————————————————————————————————————————————————————— 
How do you get the third element from that list?
————————————————————————————————————————————————————————————————————————————————— 
*/
console.log(vehicles[2]);

/* 
————————————————————————————————————————————————————————————————————————————————— 
Change the function vehicle to use the list of question 7. So that 
vehicle("green", 3, 1) prints "a green new bike".
————————————————————————————————————————————————————————————————————————————————— 
*/

function vehicle2(farg, kod, gamel) {
    vehicleData = vehicle(farg, kod, gamel);
    if (kod > 2) {
        return (`A ` + farg + ` new` + ` bike`);
    };
    return vehicleData;
}
console.log(vehicle2('Pink', 3, 1));

/* 
————————————————————————————————————————————————————————————————————————————————— 
10.Use the list of vehicles to write an advertisement. So that it prints something
like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". 
(Hint: use a for loop.)
————————————————————————————————————————————————————————————————————————————————— 
*/
let loopString = "Amazing Joe's Garage, we service "
for (i = 0; i <= vehicles.length - 1; i++) {

    if (i == vehicles.length - 2) {
        loopString += (vehicles[i] + ' `&` ');
    } else if (i == vehicles.length - 1) {
        loopString += (vehicles[i] + '.');
    } else {
        loopString += (vehicles[i] + ', ');
    }
}
console.log(loopString);
vehicles.push("Bus");
/* 
————————————————————————————————————————————————————————————————————————————————— 
What if you add one more vehicle to the list, can you have that added to the 
advertisement without changing the code for question 10?
————————————————————————————————————————————————————————————————————————————————— 
*/

let loopString2 = "Amazing Joe's Garage, we service "
for (i = 0; i <= vehicles.length - 1; i++) {

    if (i == vehicles.length - 2) {
        loopString2 += (vehicles[i] + ' `&` ');
    } else if (i == vehicles.length - 1) {
        loopString2 += (vehicles[i] + '.');
    } else {
        loopString2 += (vehicles[i] + ', ');
    }
}
console.log(loopString2);

/*
————————————————————————————————————————————————————————————————————————————————— 
Create an empty object.
————————————————————————————————————————————————————————————————————————————————— 
*/
let emptyObject = {};

/* 
————————————————————————————————————————————————————————————————————————————————— 
Create an object that contains the teachers that you have had so far for the 
different modules.
————————————————————————————————————————————————————————————————————————————————— 
*/
const fooTeachers = {
    teachers: ["Baraa", "Sahin", "saif", "claudio"]
};
console.log(fooTeachers);

/* 
————————————————————————————————————————————————————————————————————————————————— 
Add a property to the object you just created that contains the languages that 
they have taught you.
————————————————————————————————————————————————————————————————————————————————— 
*/
fooTeachers["languages"] = ["HTML", "CSS", "JS"];
console.log(fooTeachers);

/* 
————————————————————————————————————————————————————————————————————————————————— 
Write some code to test two arrays for equality using == and ===. Test the following:
————————————————————————————————————————————————————————————————————————————————— 
*/
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log(x == y); //false
console.log(x === y); //false
console.log(z == y); //true
console.log(z == x); //false

/* 
————————————————————————————————————————————————————————————————————————————————— 
Take a look at the following code:
————————————————————————————————————————————————————————————————————————————————— 
*/
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log(o1 == o3); //false
console.log(o1 == o2); //false
console.log(o2 == o1); //false
console.log(o3 == o2); //true
console.log(o2 == o3); //true

/* 
————————————————————————————————————————————————————————————————————————————————— 
17: One more code to check
————————————————————————————————————————————————————————————————————————————————— 
*/
let bar = 42;
console.log(typeof bar);
  // (expected output: "number") becaouse bar=42 and typeof = bar
