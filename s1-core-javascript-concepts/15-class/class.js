// Design a class for employee which takes id and name in during construction of object and has a salary property

class Employee {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error('Employee id and name are mandatory')
    }

    this.id = id
    this.name = name
  }

  setSalary(salary) {
    this.salary = salary
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }

  getSalary() {
    return this.salary
  }
}

const michaelEmployee = new Employee('45e', 'Michael')

// console.log(michaelEmployee)
// michaelEmployee.setSalary(5000)
// console.log(michaelEmployee.getSalary())
// console.log(michaelEmployee.getName())

// Design a class for manager which is employee and can have department property

class Manager extends Employee {
  setDepartment(name) {
    this.department = name
  }

  getDepartment() {
    return this.department
  }
}

const manager = new Manager(2, 'John')
manager.setDepartment('Development')
console.log(manager)
console.log(manager.getDepartment())
