function findCommonElement(array1, array2) {
  let commonElements = []
  
  for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        commonElements.push(array1[i])
      } 
  }
  return commonElements
}