// arrays
let names = ['luigi', 'mario', 'yoshi']

//todo Arrays are type sensitive in TS, cannot push a number value in an array of strings and vice versa
names.push('toad')
names.push('john')

//todo To make an array of differeent data types in TS, you have to have multiple data types in the array upon declaration
//todo The variable 'mixed' can never be anything other than an array; same for names or any other array
let mixed = ['ken', 4, 'chun-li', 8, 9, true]
mixed.push('ryu')
mixed.push(20)

// objects

//todo Once the value in a key value pair is set, it cannot change into a different data type
//todo Once 'ninja' is defined as an object, it can be nothing other than an object
//todo The structure of the object is immutable. No keys can be added after initial declaration. Only values can be altered.
//? Example: ninja['age'] = 'jonathen' is incorrect and would throw a type error
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}


// Cannot add a new key to an object once it has been established
//! Wrong
//? Example: ninja.skills = ['fighting', 'sneaking']

// Cannot change the data types of the the key value pair
//! Wrong
//? Example: ninja.age = '30'

//* Correct
ninja.age = 45


// explicit types
//todo Declares the variable 'character' as a string with no defined value. 
//todo Types are as follows: string, number, boolean, 
let character: string
let isLoggedIn: boolean
let as: number


//? How to set an array of a specified data type
//* Can add string to it and nothing else
let ninjas: string[]

//* Can add numbers and nothing else
let numNinjas: number[]

//todo Cannot push to arrays until that have a value, line 55-59 are good examples of whats allowed
//! Wrong
//? Example: ninjas.push('jonathen')

//* Correct 
//? ninjas: string[] = [] |||||| ninjas.push('jonathen')
