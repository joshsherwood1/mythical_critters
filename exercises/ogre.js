class Ogre {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, home = 'Swamp') {
    this.name = name
    this.home = home
    this.swings = 0
  }

  encounter(human) {
    human.encounterCounter += 1
    if (human.noticesOgre()) {
      this.swingAt(human);
    }
  }

  swingAt(human) {
  this.swings += 1;
  if (this.swings === 2) {
    human.knockedOut = true;
  }
}

  apologize(human) {
    human.knockedOut = false;
  }
}


// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Ogre;
