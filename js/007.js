function isPrime(x) {
	var i, 
		rootX = Math.floor(Math.sqrt(x));
	
	if(typeof x === 'number' && x > 1) {
		for(i = 2; i <= rootX; i++) {			
			if(x % i === 0) {
				return false;
			}
		}
	
		return true;
	} else {
		return false;
	}
}

(function findPrimes() {
    var i = 1,
        primesFound = 0;
    
    while (primesFound < 10001) {
        if(isPrime(i)) {
            primesFound++;
        }
        
        i++;
    }
    
    return(i-1);
})();