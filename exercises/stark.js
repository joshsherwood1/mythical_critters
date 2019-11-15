class Stark {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, location = 'Winterfell') {
    this.name = name
    this.location = location
    this.safe = false
  }

  houseWords() {
    if (this.safe == false) {
    return 'Winter is Coming'
  } else {
    return 'The North Remembers'
  }
  }
}



// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Stark;
