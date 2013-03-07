sum = 0

for number in [1...1000] when number % 3 == 0 || number % 5 == 0
  sum += number

console.log sum
