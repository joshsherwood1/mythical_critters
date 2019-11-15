class Sphinx {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length === 4) {
       this.riddles.shift();
     }
  }

  attemptAnswer(guess) {
    if (this.riddles.find(riddle => riddle.answer === guess)) {
      var riddle = this.riddles.find(riddle => riddle.answer === guess)
      var index = this.riddles.indexOf(riddle);
      this.riddles.splice(index, 1);
      if (this.riddles.length >= 1) {
        return "That wasn't that hard, I bet you don't get the next one";
      } else {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`;
      }
    } else {
      this.heroesEaten += 1;
    }
  }
}

// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Sphinx;
