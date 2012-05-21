// The prime factors of 13195 are 5, 7, 13 and 29.
// 
// What is the largest prime factor of the number 600851475143 ?

var isPrimeIterations = 0;

function isPrime(x) {
	var i, 
		rootI = Math.floor(Math.sqrt(x));
	
	if(typeof x === 'number' && x > 1) {
		for(i = 2; i <= rootI; i++) {
			isPrimeIterations++;
			
			if(x % i === 0) {
				return false;
			}
		}
	
		return true;
	} else {
		return false;
	}
}

function largestPrimeFactor(x) {
	var i = Math.floor(Math.sqrt(x));
	
	if (!(i % 2)) {
		i += 1;
	}
		
	while (i > 2) {
		if(x % i === 0 && isPrime(i)) {
			break;
		}
		
		i -= 2;
	}
	
	return i;
}

console.log(largestPrimeFactor(600851475143));
console.log('isPrimeIterations',isPrimeIterations);