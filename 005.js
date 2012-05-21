/*
	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

	What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var largest,
	i = largest = 20,
	checks = 0,
	found = false;

while (found === false) {
	for(var a = largest - 1; a > 1; a--) {
		checks++;
		
		found = true;
		
		if(i % a !== 0) {
			found = false;
			i += largest;
			break;
		}
	}
}

console.log('answer',i);
console.log('checks',checks);