// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91  99.
// 
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(x) {
    var i,
        ii,
        y;
        
    x = x.toString();
    y = x.length - 1;

    for (i = 0, ii = Math.floor(x.length / 2); i < ii; i++) {
        if (x[i] !== x[y - i]) {
            return false;
        }
    }

    return true;
}

function findPalindrome() {
    var x = 999,
        y = 999,
        z,
        largestPalindrome = 0;
                
    while (x > 99) {
        z = x * y;
        
        if (z > largestPalindrome && isPalindrome(z)) {
            largestPalindrome = z;
        }
    
        if (y !== 100) {
            y--;
        } else {
            x--;
            y = 999;
        }
    }
    
    return largestPalindrome;
}

var speed = Date.now();

console.log(findPalindrome());
console.log('Executed in ' + (Date.now() - speed) + 'ms');