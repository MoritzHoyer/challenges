console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// // --v-- write your code here --v--

const title = "First Post";
const text = "Playing around with Javascript";
let likes = 56;
const user = "Jens Fischer";
const isReported = false;

// // --^-- write your code here --^--

// /*
// 2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
// */

// // --v-- write your code here --v--

console.log("Title:", title);
console.log("Text:", text);
console.log("Likes:", likes);
console.log("User:", user);
console.log("Is Reported:", isReported);

const newLike = likes + 1;
console.log("Updated Likes:", newLike);

// // --^-- write your code here --^--
