// interface do tipo de função
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string;
    outputName?: string; // parâmetro opcional *?*
}
// não tem inicialização de propriedades
interface Greetable extends Named {
    greet (phrase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n)
            this.name = n;
        else
            console.log('Hi!');
    }

    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }

}

let user: Greetable;

user = new Person();

console.log(user);