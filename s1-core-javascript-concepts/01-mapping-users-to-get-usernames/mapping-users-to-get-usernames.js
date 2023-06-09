// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: 'John',
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: 'Mike',
    isActive: false,
    age: 30,
  },
]

// 1)-

const userNames = users.map((user) => user.name)

console.log(userNames)

// 2)-

const activeUsers = users.filter((user) => user.isActive).map((acUser) => acUser.name)

console.log(activeUsers)

// 3)-

const sortedUsers = users.sort((a, b) => b.age - a.age)

console.log(sortedUsers)
