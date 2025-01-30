const arr = [1, 2, 3, 2]

const deleteBackwards = (arr, val) => {
  if (!arr) return
  let i = arr.length - 1
  while (i >= 0) {
    if (arr[i] ===val) {
      arr.splice(i, 1)
    }
    i--
  }
}

deleteBackwards(arr, 1)
console.log(arr)