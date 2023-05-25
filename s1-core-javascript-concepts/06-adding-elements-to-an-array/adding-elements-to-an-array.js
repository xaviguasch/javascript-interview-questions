// Write a function which get's an array and an element and returns a array with this element at the end

const makeNewArr = (arr, el) => {
  return [...arr, el]
}

console.log(makeNewArr(['a', 'b', 'c'], 'xxxx'))
