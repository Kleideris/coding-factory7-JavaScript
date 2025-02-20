function transformObject(obj, transformCallback) {
  let transformedObj = {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let [newKey, newValue] = transformCallback[key, obj.key]
      transformedObj[newKey] = newValue
    }
  }
  return transformCallback
}