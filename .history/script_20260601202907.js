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


