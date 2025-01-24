const s = "Coding Factory"
const s2 = "CODING Factory"

const replaced = s.replace("Coding", "Code")
const lower = s.toLocaleLowerCase()
const upper = s.toUpperCase()

console.log(replaced)
console.log(lower)
console.log(upper)

if (s.toUpperCase() === s2.toUpperCase()) {
  console.log("EQUALS")
}

const firstname = "Alice      "
if (firstname.trim() === "Alice") {
  console.log("EQUAL")
}

console.log("Coding".repeat(10))

const concat = s + s2 + "Goodnight!"
const concat2 = s.concat(s2).concat("Bye!")