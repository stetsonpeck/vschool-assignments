function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "Full Time";
    this.printEmployeeForm = function () {
        console.log("Name:" + this.name, +"Job Title:" + this.jobTitle, +"Salary:" + this.salary, +"Status:" + this.status);

    }
}

var stetson = new Employee("Stetson", "Student", "10000");
var maria = new Employee("Maria", "wife", "10000");
var jackson = new Employee("Jackson", "Doctor", "20000", "Part Time");
var julia = new Employee("Julia", "Nurse", "30000");

var employees = [];

employees.push("stetson");
employees.push("maria");
employees.push("jackson")
employees.push("julia");