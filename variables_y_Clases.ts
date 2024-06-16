// Variables and Types
//
// String

let nombre2: string = "John"; 
// Number

let edad1: number = 30;
// Boolean
let isStudent: boolean = false;
// Array
let frutas: string[] = ["apple", "banana", "cherry"];
// Tuple
let persona: [string, number] = ["Alice", 25];
// Enum
enum Color {
    RED,
    GREEN,
    BLUE
}

let favoriteColor: Color = Color.GREEN;

// Operations
console.log(`Name: ${nombre2}, Age: ${edad1}, Is Student: ${isStudent}`);
console.log(`Fruits: ${frutas.join(", ")}`);
console.log(`Person: Name - ${persona[0]}, Age - ${persona[1]}`);
console.log(`Favorite Color: ${Color[favoriteColor]}`);
