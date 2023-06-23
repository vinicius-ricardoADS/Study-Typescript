const names: Array<string | number> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30});
console.log(mergedObj);

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy> (element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1)
        descriptionText = 'Got ' + element.length + ' elements.';
    else if (element.length > 1)
        descriptionText = 'Got ' + element.length + ' elements';
    return [element, descriptionText];
}

function extractAndConvert<T extends object, 
U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name');

type Primitive = string | number | boolean;

class DataStorage<T extends Primitive> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

interface CourseGoal {
    titile: string;
    description: string;
    completeUntil: Date;
}

// Generic Types <Partial>
// Tem como função permitir propriedades de tipos ou interfaces
// serem temporariamente opcionais para algum tipo de tratamento

function createCourseGoal(title: string, description: string,
date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.titile = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return <CourseGoal>courseGoal; // ou courseGoal as CourseGoal
}

const sports: Readonly<string[]> = ['Sports', 'Bascket'];
// sports.push('Futbol'); não funciona pois é apenas de leitura