//Use this file to implement Part One of your project

var animal = {};

animal.username = "chris";

animal["tagline"] = "I'm coco for cocoa puffs";

var noises = [];
animal.noises = noises

console.log(animal);

var count = 0;
for (var key in animal) {
  count++;
  if (key === 'username') {
    console.log('Hi my name is ' + animal[key]);
  } else if (key === 'tagline') {
    console.log('I like to say ' + animal[key]);
  }
}


// 1) What happens if you return 'Hi my name is ' + ___ instead of using console.log() inside the loop?


//Review
//Let's go over some concepts:

// 1) What are the different ways you can add properties and values to objects?
// answer: bracket and dot notation
// 2) Which of these methods would you use if you wanted to add a property to an object that had a weird symbol (think '&')?
// answer: bracket notation

// 3) What about if the property is a variable, how does that change the syntax?
// answer: still use bracket notation. See the rules for dots and bracket
