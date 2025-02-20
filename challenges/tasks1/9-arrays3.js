function chunkArray(array, size) {
  let result = []
  
  for (let i = 1; i <= array.length; i += size) {
    let chunk = array.slice(i, size)
    result.push(chunk)
  }
  return result
}