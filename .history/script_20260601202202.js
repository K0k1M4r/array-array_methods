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
        console.log('')
    }
}
