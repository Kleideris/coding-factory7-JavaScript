function pickKeys(obj, keys) {
  let newObj = {}
  
  for (let i = 0; i < keys.lenght; i++) {
    let key = keys[i]
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}