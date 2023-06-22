"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n)
            this.name = n;
        else
            console.log('Hi!');
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user;
user = new Person();
console.log(user);
//# sourceMappingURL=app.js.map