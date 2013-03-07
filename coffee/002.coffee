num1 = 1
num2 = 2
evenSum = 2

while num1 + num2 < 4000000
  next = num1 + num2
  num1 = num2
  num2 = next

  if next % 2 == 0
    evenSum += next

console.log evenSum
