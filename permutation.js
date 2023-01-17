// r개를 뽑는 모든 순열 구하기

function permutation(arr, r) {
  const result = [];

  if (r === 1) return arr.map(value => [value]);

  arr.forEach((fixed, index, origin) => {
    const restArr = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const restPermutation = permutation(restArr, r - 1);
    const restResultArray = restPermutation.map(value => [fixed, ...value]);
    result.push(...restResultArray);
  });

  return result;
}

const result = permutation([1, 2, 3, 4, 5], 3);
console.log(result);

// r개를 뽑는 순열 개수 구하기
// nPr = n! / (n-r)!

function permutationCount(arr, r) {
  let n = arr.length;
  return factorial(n) / factorial(n - r);
}

function factorial(n) {
  let result = 1;

  while (n) {
    result *= n;
    n--;
  }

  return result;
}

const res = permutationCount([1, 2, 3, 4, 5], 3);
console.log(res);
