// Find the number of occurences of minimum value in the list

const array = [1, 2, 3, 1, 1]

const findNumber = (arr) => {
  const hashMap = {}

  let min = arr[0]

  for (const el of arr) {
    if (hashMap[el]) {
      hashMap[el]++
    } else {
      hashMap[el] = 1
    }

    if (el < min) {
      min = el
    }
  }

  return `The lowest number is ${min} and it gets repeated ${hashMap[min]} times`
}

console.log(findNumber(array))
