"use strict";
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const sum = add(10.59, 1.2, 9, 0, 3);
const person = {
    firstName: 'Vinicius',
    age: 21
};
// nomes de constantes precisam ser as mesmas que as
// propriedades
const { firstName, age } = person;
//# sourceMappingURL=app.js.map