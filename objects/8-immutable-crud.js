const obj = { id: 1, firstname: "Alice" }

// Add properties

// Modify the object
obj.lastname = "W."
console.log(obj)

// Immutable - fresh copy
const addToObj = (obj, field, value) => ( {...obj, [field]: value} )
const objCopy = addToObj(obj, "lastname", "W.")
console.log(objCopy)

// Modifies / updates to obj
obj.firstname = "Athana"
console.log(obj)

// Update the object

// Immutable - fresh copy
const updateObj = (obj, field, newVal) => ({...obj, [field]: newVal})
const updatedObj = updateObj(obj, "firstname", "Athana")
console.log(updatedObj)

// Delete a property of an object

// Immutable delete
const deleteIdObject = (obj, field) => {
  const {[field]: _ , ...objToReturn} = obj
  return objToReturn
}

const objFromDelete = deleteIdObject(obj, "id")
console.log(objFromDelete)