"use strict";
;
;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString();
    return a + b;
}
// Type Guards
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp)
        console.log('Privileges: ' + emp.privileges);
    if ('startDate' in emp)
        console.log('Date: ' + emp.startDate);
}
printEmployeeInformation(e1);
// Type Casting
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');
const errorBag = {
    email: 'Not a valid email',
    username: 'Must start with a capital character'
};
//# sourceMappingURL=types-typing.js.map