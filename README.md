# usefulJavaScript
I like to learn and I like to teach, so I am compiling some of the things I have been working on to become a better JavaScript developer - this is hoping that someone (you?) might stumble upon this repo and find it helpful, and also for myself, to keep track of my notes and good sources. 

You might find some things missing here and there since I had the idea of making this repo rather late in the process of picking up JS again - but I will keep updating. 

Note that a lot of these notes need editing and filling in the blanks - feel free to message me if you have any ideas for improvements.

I am adding links to all the resources I have used. However, some of those classes are paid classes, so should anyone feel like I am violating their copyrights by posting my notes, please let me know and I will take them down.

## JS Basics and Beyond

My favorite JavaScript book: https://github.com/getify/You-Dont-Know-JS.

This book has taught me a lot on how to play towards the strenghts of JS. The author made me a strong advocate for the case of learning JS specifically rather than relying on the fact that I can program in other languages. I can now say that I love programming in JS, and this book taught me how to use it right rather than just making things work with brute force. 

[Here](https://javascript30.com/) is a free 30 day challenge for Vanilla JavaScript by Wes Bos. I have yet to complete this one (I have started...). The good part about this one is: a lot of coding --> a lot of learning.

## ES6

This is a great class to learn ES6 and really JS in general, since he compares old vs new features while showing examples that teach a lot about DOM manipulation and good coding standards as well: http://wesbos.com/es6-for-everyone/

[My notes on ES6](https://github.com/maike-hilda/usefulJavaScript/blob/master/ES6/ES6_notes.md) // still in the gitignore file --> editing those right now

## React
This course actually goes over all the ES6 concepts needed to use react, no need to learn ES6 beforehand
https://completereactcourse.com/

## Data Structures in JS

[My notes on Data Structures in JS](https://github.com/maike-hilda/usefulJavaScript/blob/master/dataStructures.md)

Pros: very to the point, helpful animations

Cons: not a lot of practice, mostly listening, so you need to find ways to use these concepts in your own application. 

## Algorithms

## Code Editors

My favorite is VS Code (the integrated terminal (I use bash on windows) is just the best. 

Here are some useful shortcuts: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

And after installing Emmet, this comes in handy too: https://docs.emmet.io/cheat-sheet/.
Note that newer versions no longer use *tab* for expanding shortcuts by default (which is a good thing once you get used to it, since that gives the *tab* back for, well, tabs. Use *Ctrl+Space* instead.

## Recursion

Video in progress

## Functional Programming

## Callback Functions
In JS, functions are subtype of Object. We can store a function in a variable, since functions don't usually change, we use const rather than var to make use of ES6, so `const fun = function() { // function stuff }`. So we can pass this `fun` as an argument into `anotherFunction` - `anotherFunction(someOtherArgument, fun)` - `fun` can then be *called* or executed in `anotherFunction`. Note that `fun` is passed in like any other parameter i.e. without (). Thus, `fun` is a callback or higher-order function. 

## Closures
--> callback functions are closures

## Promises

## Object Oriented JS

## Projects


