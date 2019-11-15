class Direwolf {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, home = 'Beyond the Wall', size = 'Massive', ) {
    this.name = name
    this.home = home
    this.size = size
    this.starksToProtect = []
    this.huntsWhiteWalkers = true
  }

  protect(stark) {
    if ((stark.location == this.home) && (this.starksToProtect.length < 2)) {
    this.starksToProtect.push(stark);
    stark.safe = true
    this.huntsWhiteWalkers = false
    }
  }

  leave(stark) {
      stark.safe = false
     var index = this.starksToProtect.indexOf(stark);
     this.starksToProtect.splice(index, 1);
  }
}



// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Direwolf;
