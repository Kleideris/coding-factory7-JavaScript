const arr = [1, 2, 4, 5, 2, 6, 7, 2, 5, 8, 9, 9, 2]

// function να επιστρέφει ένα πίνακα με τις θέσεις
// στις οποιές βρίσκεται ένασ συγκεκριμένος αριθμός

// function returnIndexesOfEl(el) {
//   position = 0;
//   returnArr = []

//   while (arr.includes(el)) {
//     arr.splice(position, el)
//     position = arr.indexOf(el)
//     returnArr.push(position)
//   }
//   return returnArr
// }

// console.log(arr.returnIndexesOfEl(2))

const getIndexes = (arr, val) => {
  const indexes = []

  // arr.forEach((v, index) => {
  //   if (v === val) {
  //     indexes.push(index)
  //   }
  // })

  arr.array.forEach(function(v, index) {
    if (v === val) {
      indexes.push(index)
    }
  })

  return indexes
}

console.log(getIndexes(arr, 2))