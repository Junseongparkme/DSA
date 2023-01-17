// r개를 뽑는 모든 조합 구하기

function combination(arr, r) {
  const result = [];

  if (r === 1) return arr.map(value => [value]);

  arr.forEach((fixed, index, origin) => {
    const restArray = origin.slice(index + 1);
    const restCombination = combination(restArray, r - 1);
    const restResultArray = restCombination.map(value => [fixed, ...value]);
    result.push(...restResultArray);
  });

  return result;
}

const result = combination([1, 2, 3, 4, 5], 3);
console.log(result);

// r개를 뽑는 모든 조합의 개수 구하기
// nCr = n! / r!(n-r)!

function combinationCount(arr, r) {
  const n = arr.length;
  return factorial(n) / factorial(r) / factorial(n - r);
}

function factorial(n) {
  let result = 1;

  while (n) {
    result *= n;
    n--;
  }

  return result;
}

const res = combinationCount([1, 2, 3, 4, 5], 3);
console.log(res);
