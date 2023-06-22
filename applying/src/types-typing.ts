interface Admin {
    name: string;
    privileges: string[];
};

interface Employee {
    name: string;
    startDate: Date;
};

/* interface ElevatedEmployee extends Employee, Admin {

} */

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // interseção de 2 tipos

function add (a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString();
    return a + b;
}

type UnkownEmployee = Employee | Admin;

// Type Guards
function printEmployeeInformation(emp: UnkownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp)
        console.log('Privileges: ' + emp.privileges);
    if ('startDate' in emp)
        console.log('Date: ' + emp.startDate);
}

printEmployeeInformation(e1);

// Discriminated Unions
interface Bird {
    type: 'bird'; // literal type
    flyingSpeed: number;
}

// Discriminated Unions
interface Horse {
    type: 'horse'; // literal type
    runningSpeed: number;
}

// Type Casting
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// Quando não se sabe exatamente o nome da propriedade a ser
// adicionada e nem quantas podem ser adicionadas
// Index Properties
interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character'
}