// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this twice in separate interviews.

for (var i = 1; i <= 10; i++) {
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0);
}

// changing var to let will fix this issue
// the issue is that the for loop pushes the print pointing to i to the end of the queue,
// and by the time it's finished running, it still points to i, but now i = 11.
// for var i = 1, with a limit of 10, stops when i = 11
// so it adds 1 to 10, but then checks to see if it's over the limit
// and it is