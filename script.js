const students = ["Sandro", "Mariam", "Dato"];

students.push("Luka");
students.unshift("Nia");
console.log(students);

const colors = ["Black", "Red", "Green", "Blue", "White"];
colors.pop();
colors.shift();
console.log(colors);

const usernames = ["john_doe", "admin", "super_user"];
const newName = "admin";

function doesInclude(usernames){
    if(usernames.includes(newName)){
        console.log('saxeli dakavebulia')
    } else {
        console.log('valid name')
    }
}

doesInclude(usernames);

const runners = ["Nika", "Tornike", "Salome", "Beka", "Lela"];
const newRunners = runners.slice(0,3);
console.log(newRunners);

const sentence = ["I", "love", "Python", "very", "much"];
sentence.splice(2,1,"JavaScript");
console.log(sentence);


const gelPrices = [27, 54, 13.5, 108];
const usdPrices = gelPrices.map(gelToUsd);

function gelToUsd(price) {
    return price / 2.7
}
console.log(usdPrices);



const grades = [45, 78, 92, 33, 51, 88, 49];
const passedGrades = grades.filter((x)=> x >= 51);
console.log(passedGrades);


const distances = [5, 3, 8, 2, 10, 4, 6];
const jami = distances.reduce((previous, current)=>
    {
     return previous + current
    }
    , 0
);
console.log(jami)


const transactions = [150, 200, -50, 400];


const suspiciousTransaction = transactions.find(num => num < 0);

console.log(suspiciousTransaction);



const products = [
  { name: "Laptop", price: 2500, inStock: true },
  { name: "Phone", price: 1800, inStock: false },
  { name: "Mouse", price: 80, inStock: true },
  { name: "Keyboard", price: 150, inStock: true }
];


const activeProductNames = products
  .filter(product => product.inStock === true) 
  .map(product => product.name);

console.log(activeProductNames); 






const examScores = [45, 78, 92, 33, 51, 88, 49];


const passedScoresSum = examScores
  .filter(score => score >= 51)
  .reduce((accumulator, currentScore) => accumulator + currentScore, 0);

console.log(passedScoresSum);




const prices = [40, 100, 75, 30, 200];


const discountedHighPrices = prices
  .map(price => price * 0.8) 
  .filter(price => price > 50);

console.log(discountedHighPrices); 




const storeProducts = [
  { name: "Book", price: 35 },
  { name: "Headphones", price: 150 },
  { name: "Monitor", price: 600 },
  { name: "Pen", price: 5 }
];


const expensiveProductNames = storeProducts
  .filter(product => product.price > 100) 
  .map(product => product.name);        

console.log(expensiveProductNames); 






const names = ["Luka", "Nia", "Sandro", "Dato", "Giorgi"];


const filteredNames = names.filter(name => name.includes("a"));

console.log(filteredNames);




const cart = [
  { name: "Apple", price: 2, quantity: 5 },
  { name: "Bread", price: 3, quantity: 2 },
  { name: "Milk", price: 4, quantity: 1 }
];

const totalCost = cart
  .map(item => item.price * item.quantity) 
  .reduce((acc, curr) => acc + curr, 0);  

console.log(totalCost); 




const users = [
  { name: "Nika", age: 16, isActive: true },
  { name: "Mariam", age: 22, isActive: false },
  { name: "Dato", age: 19, isActive: true },
  { name: "Ana", age: 17, isActive: true }
];


const firstAdultActiveUser = users
  .filter(user => user.isActive === true) 
  .find(user => user.age >= 18);          

console.log(firstAdultActiveUser);





const numbers = [-3, 5, 0, 8, -2, 10];

const doubledPositiveNumbers = numbers
  .filter(num => num > 0) 
  .map(num => num * 2);   

console.log(doubledPositiveNumbers);














 