function mapObjectValues(obj, mappingFunction) {
  let newObj = {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = mappingFunction(obj[key])
    }
  }
  return newObj
}