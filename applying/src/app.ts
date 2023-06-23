function Logger(logString: string) { // decorator factory
    return function (target: Function) {
        console.log(logString);
        console.log(target);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        const hookElement = document.getElementById(hookId);
        const p = new constructor();
        if (hookElement) {
            hookElement.innerHTML = template;
            hookElement.querySelector('h1')!.textContent = p.name;
        }
    }
}

@Logger('LOGGING - PERSONA')
@WithTemplate('<h1>My persona object</h1>', 'app')
class Persona {
    name = 'Max';
    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Persona();
console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, propertyName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}

class Product {

    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0)
            this._price = val;
        else
            throw new Error('Invalid price - should be positive');
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}