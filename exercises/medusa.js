class Medusa {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name) {
    this.name = name
    this.statues = []
  }

  stare(person_object) {
    this.statues.unshift(person_object);
    person_object.stoned = true;
    if (this.statues.length >= 4) {
      var unstoned_person = this.statues.pop();
      unstoned_person.stoned = false;
    }
  }
}


// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Medusa;
