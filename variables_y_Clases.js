// Variables and Types
//
// String
var nombre2 = "John";
// Number
var edad1 = 30;
// Boolean
var isStudent = false;
// Array
var frutas = ["apple", "banana", "cherry"];
// Tuple
var persona = ["Alice", 25];
// Enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var favoriteColor = Color.GREEN;
// Operations
console.log("Name: ".concat(nombre2, ", Age: ").concat(edad1, ", Is Student: ").concat(isStudent));
console.log("Fruits: ".concat(frutas.join(", ")));
console.log("Person: Name - ".concat(persona[0], ", Age - ").concat(persona[1]));
console.log("Favorite Color: ".concat(Color[favoriteColor]));
