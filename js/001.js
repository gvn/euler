var multipleSum = 0,
    i;

for (i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        multipleSum += i;
    }
}

console.log(multipleSum);