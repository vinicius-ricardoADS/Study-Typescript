abstract class Department {
    static fiscalYear = 2023;
    //private id: string;
    //private name: string;
    protected employees: string[] = [];

    // propriedade readonly garante que não vai modificar
    // depois disso
    constructor (protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = name;
    }

    static createEmployee (name: string) {
        return { name: name };
    }

    abstract describe (this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {

    constructor (id: string, public admins: string[]) {
        super(id, 'IT');
    }

    describe () {
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport () {
        if (this.lastReport)
            return this.lastReport;
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if (!value) 
            throw new Error('Please pass in a valid value!');
        this.addReport(value);
    }

    describe(): void {
        console.log('Accounting Department - ID: ' + this.id);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance () {
        if (this.instance)
            return this.instance;
        return this.instance = new AccountingDepartment('d2', []);
    }

    addEmployee(name: string) {
        if (name === 'Max')
            return;
        this.employees.push(name);
    }

    addReport (text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}
const employee = Department.createEmployee('Virginia');

console.log(employee, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe();
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();

accounting.addReport('Something went wrong...');
accounting.mostRecentReport = accounting.mostRecentReport;
console.log(accounting.mostRecentReport);

accounting.addEmployee('Manu');

accounting.describe();