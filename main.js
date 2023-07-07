// KATA 1
//  https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while (principal < desired) {
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000,0.01625,0.18,1200));
console.log(calculateYears(1000,0.05,0.18,1000));

// KATA 2 
// https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript
function solution(digits){
  let answer = 0;
  for (let i = 0; i < digits.length; i++) {
    let number = digits.substr(i, 5);
    if (Number(number) > answer) {
      answer = Number(number);
    }
  }
  return answer;
}
console.log(solution('1234567898765'));
console.log(solution('234567999991'));

// KATA 3
// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript
function sumEvenNumbers(input) {
  return input.filter(num => num % 2 === 0)
        .reduce((ttl,cv) => ttl + cv, 0)
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// KATA 4
// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript 
function halvingSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n;
    n = Math.floor(n / 2);
  }
  return sum;
}

console.log(halvingSum(25));;

// KATA 5
// https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript
function findDeletedNumber(arr, mixArr) {
  return arr.find(val => !mixArr.includes(val)) || 0;
}
console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]));

// KATA 6 
// https://www.codewars.com/kata/57f8ee485cae443c4d000127/train/javascript
function spacify(str) {
  return str.split('').join(' ');
}

console.log(spacify('hello world'));


