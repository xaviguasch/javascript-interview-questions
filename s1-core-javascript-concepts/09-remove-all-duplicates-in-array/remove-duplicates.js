// Remove all duplicates in the array

const array = [2, 4, 4, 3, 5, 3]

// const removeDuplicates = (arr) => [...new Set(arr)]

// const removeDuplicates = (arr) => {
//   const uniqueArr = []

//   for (const el of arr) {
//     if (!uniqueArr.includes(el)) {
//       uniqueArr.push(el)
//     }
//   }

//   return uniqueArr
// }

const removeDuplicates = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...acc, el]
  }, [])
}

console.log(removeDuplicates(array))
