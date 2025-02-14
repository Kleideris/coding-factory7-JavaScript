let obj = {
  name: 'Alice',
  age: 25,
  city:'Wonderland',
  hello() {
    console.log('Hello, ' + this.name)
  }
}

console.log(`Name: ${obj.name}, Age: ${obj.age}, City: ${obj.city}`)
obj.hello()
