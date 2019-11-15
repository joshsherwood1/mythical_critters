class Fairy {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name) {
    this.name = name
    this.dust = 10
    this.clothes = {dresses: ['Iris']}
    this.disposition = 'Good natured'
    this.humanWards = []
  }

  receiveBelief() {
    this.dust += 1
  }

  believe() {
    this.dust += 10
  }

  makeDresses(array) {
    this.clothes.dresses.push(...array)
  }

  provoke() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant) {
     if (this.disposition === 'Vengeful') {
       infant.disposition = 'Malicious';
       this.humanWards.push(infant);
       if (this.humanWards.length === 3) {
         this.disposition = 'Good natured';
       }
     } else {
       return infant;
     }
   }
 }


// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Fairy;
