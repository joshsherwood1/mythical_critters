class Human {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name) {
    this.name = name
    this.encounterCounter = 0
    this.knockedOut = false;
  }

  noticesOgre() {
    if (this.encounterCounter % 3 === 0 && this.encounterCounter >= 3) {
      return true;
   } else {
     return false;
    }
  }
}


// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Human;
