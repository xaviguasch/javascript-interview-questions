// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
  },
  {
    id: 2,
    name: 'John',
    isActive: true,
  },
  {
    id: 3,
    name: 'Mike',
    isActive: false,
  },
]

// const checkIfItExists = (arr, nameToCheck) => {
//   for (const obj of arr) {
//     if (obj.name === nameToCheck) {
//       return true
//     }
//   }

//   return false
// }

const checkIfItExists = (arr, nameToCheck) => arr.some((el) => el.name === nameToCheck)

console.log(checkIfItExists(users, 'John'))
console.log(checkIfItExists(users, 'Sam'))
