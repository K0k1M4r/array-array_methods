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


const distances = [1,2];
distances.reduce((previous, current)=>
    {
     return previous + current
    }
    , 0
);





 