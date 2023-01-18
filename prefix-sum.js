let arr = [5, 11, 31, 3, 41, 14, 856, 57, 456, 6, 64];

arr.unshift(0);

let prefixSum = [0];

for (let i = 1; i < arr.length; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i];
}

console.log(prefixSum); // 누적합 배열 출력
console.log(prefixSum[7] - prefixSum[2]); // 3번째 ~ 7번째 값의 합
console.log(prefixSum[8]); // 8번째 값까지의 합
