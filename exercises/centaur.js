class Centaur {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, breed, cranky = false, standing = true) {
    this.name = name;
    this.breed = breed;
    this.cranky = cranky;
    this.standing = standing;
    this.layingStatus = false;
    this.i = 0;
  }

 reset() {
   this.cranky = false;
   this.i = 0;
 }

 shoot() {
   if (this.cranky || this.layingStatus) {
     return 'NO!';
   }  else {
     this.i += 1;
     if (this.i > 2) {
       this.cranky = true;
     }
     return 'Twang!!!';
   }
 }

 run() {
   if (this.layingStatus) {
     return 'NO!';
   } else {
     this.i += 1;
     if (this.i > 2) {
       this.cranky = true;
     }
     return 'Clop clop clop clop!!!';
   }
 }

 sleep() {
   if (this.standing) {
     return 'NO!';
   } else {
     this.reset();
     return 'ZZZZ';
   }
 }

 down() {
   this.standing = false;
   this.layingStatus = true;
 }

 stand() {
   this.standing = true;
   this.layingStatus =  false;
 }

 drink() {
   if (this.standing && this.cranky) {
     this.reset();
   } else if (this.standing && this.cranky == false) {
     this.cranky = true
   } else {
     return "Not while I'm laying down!";
   }
 }
}

// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Centaur;
