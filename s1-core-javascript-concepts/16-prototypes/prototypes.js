//  Design the same classes from the previous exercise by using only Javascript prototypes

var Employee = function (id, name) {
  if (!id || !name) {
    throw new Error('Employee id and name are mandatory')
  }

  this.id = id
  this.name = name
}

Employee.prototype.setSalary = function (salary) {
  this.salary = salary
}

Employee.prototype.getId = function () {
  return this.id
}

Employee.prototype.getName = function () {
  return this.name
}

Employee.prototype.getSalary = function () {
  return this.salary
}

const michaelEmployee = new Employee('45e', 'Michael')

// console.log(michaelEmployee)
// michaelEmployee.setSalary(5000)
// console.log(michaelEmployee.getSalary())
// console.log(michaelEmployee.getName())

var Manager = function (params) {
  Employee.apply(this, arguments)
}

Manager.prototype = Object.create(Employee.prototype)
Manager.prototype.constructor = Manager

Manager.prototype.setDepartment = function (name) {
  this.department = name
}

Manager.prototype.getDepartment = function () {
  return this.department
}

const manager = new Manager(2, 'John')
manager.setDepartment('Development')
console.log(manager)
console.log(manager.getDepartment())
