class Werewolf {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, location, human = true, wolf = false) {
    this.name = name;
    this.location = location;
    this.human = human
    this.wolf = wolf
  }

  change() {
    if ((this.human == true) || (this.wolf == false)) {
      this.human = false;
      this.wolf = true;
    } else {
      this.human = true;
      this.wolf = false;
    }
  }
}


// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Werewolf;
