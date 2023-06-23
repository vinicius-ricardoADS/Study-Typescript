"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1)
        descriptionText = 'Got ' + element.length + ' elements.';
    else if (element.length > 1)
        descriptionText = 'Got ' + element.length + ' elements';
    return [element, descriptionText];
}
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
// Generic Types <Partial>
// Tem como função permitir propriedades de tipos ou interfaces
// serem temporariamente opcionais para algum tipo de tratamento
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.titile = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal; // ou courseGoal as CourseGoal
}
const sports = ['Sports', 'Bascket'];
// sports.push('Futbol'); não funciona pois é apenas de leitura
//# sourceMappingURL=generics.js.map