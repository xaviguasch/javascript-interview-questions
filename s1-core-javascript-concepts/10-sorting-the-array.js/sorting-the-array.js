// Sort the array of numbers

const numsArr = [3, 5, 1]

const sortArrayFunc = (arr) => {
  return [...arr].sort((a, b) => a - b)
}

// console.log(sortArrayFunc(numsArr))

// Sort array of objects by author's lastname

const books = [
  { name: 'Harry Potter', author: 'Joanne Rowling' },
  { name: 'Warcross', author: 'Marie Lu' },
  { name: 'The Hunger Games', author: 'Suzanne Collins' },
]

const newBooks = [...books].sort((book1, book2) => {
  const authorLastN1 = book1.author.split(' ')[1]
  const authorLastN2 = book2.author.split(' ')[1]

  return authorLastN1 < authorLastN2 ? -1 : 1
})

console.log(newBooks)
