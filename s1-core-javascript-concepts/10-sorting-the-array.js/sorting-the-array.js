// Sort the array of numbers

const numsArr = [3, 5, 1]

const sortArrayFunc = (arr) => {
  return [...arr].sort((a, b) => a - b)
}

console.log(sortArrayFunc(numsArr))

// Sort array of objects by author's lastname

const books = [
  { name: 'Harry Potter', author: 'Joanne Rowling' },
  { name: 'Warcross', author: 'Marie Lu' },
  { name: 'The Hunger Games', author: 'Suzanne Collins' },
]
