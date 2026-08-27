function addDigits(num: number): number {
  let sum = 0;
  for (let digit of String(num)) {
    sum += Number(digit);
  }
  if (sum < 10) {
    return sum;
  }

  return addDigits(sum);
}

console.log(addDigits(508));
