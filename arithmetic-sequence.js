// 첫 요소의 값을 알 때 n번째 요소 구하기
// a_n = a_1 + (n-1)d

const arr = [3, 6, 9, 12, 15, 18, 21];

function getValue(arr, n) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr[0];

  const d = arr[1] - arr[0];
  return arr[0] + n * d; // index가 0부터 시작해서 (n-1)이 아닌 n
}

const result = getValue(arr, 4);
console.log(result);

// 첫 요소의 값과 마지막 요소의 값을 알때, 1 ~ n번째 요소의 합 구하기
// n(a + l) / 2

function getSum(arr, n) {
  return (n * (arr[0] + arr.at(-1))) / 2;
}

const res = getSum(arr, 4);
console.log(res);
