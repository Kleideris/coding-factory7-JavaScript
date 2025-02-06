const students = ['Alice', 'Adreas', 'Bob', 'Costas']

students.forEach(function(val, _, arr) {
  console.log(val, arr)
})

let filtered = students.filter(student => student === 'Adreas')
console.log(filtered)

let mapped = students.map(student => "Student: " + student)
console.log(mapped)

const numbers = [1, 6, 9, 12]
let sum = numbers.reduce((total, val) => total + val, 0)
console.log(sum)