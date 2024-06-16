// Classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Define class Persona
var Persona = /** @class */ (function () {
    function Persona(name, age) {
        this.name = name;
        this.age = age;
    }
    Persona.prototype.getName = function () {
        return this.name;
    };
    Persona.prototype.getAge = function () {
        return this.age;
    };
    Persona.prototype.setName = function (name) {
        this.name = name;
    };
    Persona.prototype.setAge = function (age) {
        this.age = age;
    };
    return Persona;
}());
// Extend class Persona to create class Empleado
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    Empleado.prototype.getSalary = function () {
        return this.salary;
    };
    Empleado.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    return Empleado;
}(Persona));
// Example usage
var empleado = new Empleado("Bob", 35, 75000);
console.log("Name: ".concat(empleado.getName(), ", Age: ").concat(empleado.getAge(), ", Salary: ").concat(empleado.getSalary()));
