// Write a function which implements range

// range (1,50)
// 1,2,3,4,5...50

const range = (start, end) => {
  const arr = []

  for (let i = start; i <= end; i++) {
    arr.push(i)
  }

  return arr
}

// console.log(range(1, 50))

const rangeAdvanced = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start)
}

console.log(rangeAdvanced(1, 50))
