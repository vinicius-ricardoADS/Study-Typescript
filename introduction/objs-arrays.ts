// enums
/* enum Role { ADMIN, READ_ONLY, AUTHOR };
const person = {
    name: 'Ashe',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}; */

const person: {
    name: string;
    age: number;
    hobbies: string[]; // string of array
    role: [number, string]; // tuple
} = {
    name: 'Ashe',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

console.log(person.name);