let name= "William Batson";

const stateCount= 50;

var val1= 5 + 4

 //comments- Added name, number of states and arithmatic

function sayHello() {
    alert("Hello World")
}

sayHello()

function checkAge(name, age) {
    if (age < 21) {
    alert("Sorry " + name + ", you aren't old enought to view this page!")
    }
}

checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("james", 18)
checkAge("John", 17)

//added checkage func

let favoriteVego = [
    "Potato",
    "Haricot Verts",
    "Beets",
    "Cuke",
    "'rots"
]

//rots bruh 


for (let Vego = 0; Vego < favoriteVego.length; Vego++) {
    console.log(favoriteVego[Vego])
    
}

let pet = {

    namePet: "Moose",
    breed: "standard"
};

console.log(pet.namePet, pet.breed)

let friendos = [
    {
        alias:"Chungus",
        years: 21
    },
    {
        alias: "Amongus",
        years: 20
    },
    {
        alias: "Fungus",
        years: 18
    },
    {
        alias: "bruhngus",
        years: 22
    },
    {
        alias:"Jeb", 
        years: 99
    }
]

for (let ungus = 0; ungus < friendos.length; ungus++) {
    checkAge(friendos[ungus].alias, friendos[ungus].years)
   
    
}


function getLength(anyword) {
    return anyword.length
}

console.log(getLength("Hello World"))

let wordLength = getLength("Hello World");

if (wordLength % 2 == 0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
    
}
