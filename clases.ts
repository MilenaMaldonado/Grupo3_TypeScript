// Classes

// Define class Persona
class Persona {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setAge(age: number): void {
        this.age = age;
    }
}

// Extend class Persona to create class Empleado
class Empleado extends Persona {
    private salary: number;

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }

    public getSalary(): number {
        return this.salary;
    }

    public setSalary(salary: number): void {
        this.salary = salary;
    }
}

// Example usage
const empleado = new Empleado("Bob", 35, 75000);
console.log(`Name: ${empleado.getName()}, Age: ${empleado.getAge()}, Salary: ${empleado.getSalary()}`);
