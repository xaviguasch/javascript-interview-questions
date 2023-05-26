// Sort the array of numbers

const numsArr = [3, 5, 1]

const sortArrayFunc = (arr) => {
  return [...arr].sort((a, b) => a - b)
}

console.log(sortArrayFunc(numsArr))
