// Functions

// Function with typed parameters and explicit return type
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// Generic function
function identity<T>(value: T): T {
    return value;
}

console.log(identity(42));
console.log(identity("Generic function"));
console.log(identity([1, 2, 3]));
