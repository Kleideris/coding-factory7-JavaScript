function getUniqueValues(array) {
  let uniqueArray = []

  for (let value of array) {
    if (!uniqueArray.includes(value)) {
      uniqueArray.push(value)
    }
  }
  return uniqueArray
}

let array = [1, 2, 2, 3, 4, 4, 5]
let uniqueValues = getUniqueValues(array)
console.log(uniqueValues)