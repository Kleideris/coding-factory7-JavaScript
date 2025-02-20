function flattenArray(nestedArray) {
  let flatArray = []

  function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i])
      } else {
        flatArray.push(arr[i])
      }
    }
  }

  flatten(nestedArray)
  return flatArray
}