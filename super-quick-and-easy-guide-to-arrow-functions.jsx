// Super quick guide to arrow functions

// This is not a definitive guide to arrow functions.  I'm writing a few other tutorials and blogs and want to have something to point people to so they can have a quick explanation and example of arrow functions since they are in so many of the modern frameworks.  Just enough to be dangerous!  To be clear, there are reasons where you should not use arrow functions, but that is not going to be included in this blog.  I just want you to be able to know how they work when you see them.

// Here's a regular function using the function keyword
function sayMyName(name) {
  alert(`Hello ${name}`);
}

// Let's change that to an anonymous function expression
const sayExpressionName = function(name) {
  alert(`Hello ${name}`);
};

// Should be nothing new here so far.  No Arrows or ES6 yet, but here it comes...
// first remove the function keyword and add the arrow
const sayArrowName = name => {
  alert(`Hello ${name}`);
};

// The only thing going on there is removing the function keyword and adding the arrow.  And that's it!  You've gone and made an arrow function!  Hurray! But wait, there's more!
// If there is only one argument, you can get rid of the parentheses around it.

const sayParensName = name => {
  alert(`Hello ${name}`);
};

// Getting pretty lean but we can take it even further.  If the body of the code is only one line, we can get rid of the curly braces.

const sayNoBracesName = name => alert(`Hello ${name}`);

// Frequently, you'll see these used as a callback in another function so there is no const keyword and no function name.  This is the case that we see quite a bit and the real reason I wrote this all up in the first place

name => alert(`Hello ${name}`);

// This doesn't do anything on it's own, but as a callback it's useful

const nameArray = ['Bob', 'Helen', 'Wally', 'Moana'];
nameArray.forEach(name => alert(`Hello ${name}`));

//  I think that covers the basics.  Again this is not mean to be the definitive guide, just an intro to figure out what they mean because we see them 'in the wild' in all the modern frameworks.
