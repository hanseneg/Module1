var employee = []
function Employee(Name, JobTitle, Salary){
    this.Name = Name
    this.JobTitle = JobTitle
    this.Salary = Salary
    this.Status = "Full Time"
    this.printEmployeeForm = function(){
        console.log(" Name: " + this.Name + "," + " Job Title: " + this.JobTitle + "," + " Salary: " + this.Salary + "," + " Status: " + this.Status)
    }
}


var bob = new Employee("Bob", "Teacher", "50000 per year")
var jim = new Employee("Jim", "Boxer", "$250,000 per year")
var sam = new Employee("Sam", "Writer", "$20,000 per year")

sam.Status = "Part Time"

bob.printEmployeeForm()
jim.printEmployeeForm()
sam.printEmployeeForm()

employee.push(bob)
employee.push(jim)
employee.push(sam)

console.log(employee)