// Super quick guide to arrow functions

// This is NOT a definitive guide to arrow functions.  I'm writing a few other tutorials and blogs and want to have something to point people to so they can have a quick explanation and example of arrow functions since they are in so many of the modern frameworks.  Just enough to be dangerous!  To be clear, there are reasons where you should not use arrow functions, but they are not going to be discussed in this blog post.  I just want you to be able to know how they work when you see them "in the wild".

// Let's get started.  I'm going to take you step by step converting a regular function into an arrow function.

// Here's a regular function using the function keyword
function sayMyName(name) {
  console.log(`Hello ${name}`);
}

sayMyName('Alex'); // logs 'Hello Alex'

// Let's change that to an anonymous function expression
const sayExpressionName = function(name) {
  console.log(`Hello ${name}`);
};

sayExpressionName('Alex'); // logs 'Hello Alex'

// Should be nothing new here so far.  No Arrows or ES6 yet, but here it comes...
// first remove the function keyword and add the arrow
const sayArrowName = name => {
  console.log(`Hello ${name}`);
};

sayArrowName('Alex'); // logs 'Hello Alex'

// The only thing going on there is removing the function keyword and adding the arrow.  And that's it!  You've gone and made an arrow function!  Hurray! But wait, there's more!
// If there is only one argument, you can get rid of the parentheses around it.

const sayParensName = name => {
  console.log(`Hello ${name}`);
};

sayParensName('Alex'); // logs 'Hello Alex'

// Getting pretty lean but we can take it even further.  If the code (what's the formal name for this part of a function? need to look that up) is only one line, we can get rid of the curly braces.

const sayNoBracesName = name => console.log(`Hello ${name}`);

sayNoBracesName('Alex'); // logs 'Hello Alex'

// Frequently, you'll see these used as a callback in another function so there is no const and no function name.  This is the case that we see quite a bit and the real reason I wrote this all up in the first place

name => console.log(`Hello ${name}`);
// This doesn't do anything on it's own, but as a callback it's useful
const nameArray = ['Bob', 'Helen', 'Wall-e', 'Moana'];
nameArray.forEach(name => console.log(`Hello ${name}`));

// returns
// Hello Bob
// Hello Helen
// Hello Wall-e
// Hello Moana

//  I think that covers the basics.  Again this is not mean to be the definitive guide, just an intro to figure out what they mean because we see them 'in the wild' in all the modern frameworks.
const oldNameArray = ['Bob', 'Helen', 'Wally', 'Moana'];

for (let i = 0; i < nameArray.length; i++) {
  console.log(`Hello ${nameArray[i]}`);
}
