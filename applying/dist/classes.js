"use strict";
class Department {
    // propriedade readonly garante que não vai modificar
    // depois disso
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //private id: string;
        //private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2023;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error('Please pass in a valid value!');
        this.addReport(value);
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        return this.instance = new AccountingDepartment('d2', []);
    }
    addEmployee(name) {
        if (name === 'Max')
            return;
        this.employees.push(name);
    }
    addReport(text) {
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
//# sourceMappingURL=classes.js.map