let cities = ['Athens', 'London', 'Paris']

// cities[cities.length] = 'Berlin'
// cities = [...cities, 'Berlin']
cities.push('Berlin')

for (const city of cities) {
  console.log(city)  
}

let str = 'coding factory'
let chars = [...str]
console.log(chars)
let s = str.toUpperCase()
console.log(s)
s = s.replace("CODING", "new")
console.log(s)
console.log(chars)