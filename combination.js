// n개의 요소로 이루어진 배열에서 r개를 뽑는 조합을 모두 출력

let arr = [1, 2, 3, 4, 5];
let cnt = 0;

function combination(start, b, r) {
  if (b.length === r) {
    cnt++;
    console.log(b.slice(0, r));
    return;
  }

  for (let i = start + 1; i < arr.length; i++) {
    b.push(arr[i]);
    combination(i, b, r);
    b.pop();
  }
  return;
}

combination(-1, [], 3);
console.log(cnt);

// 조합의 개수만 필요하다면 공식을 사용할 수 있습니다.
// nCr = n! / r!(n-r)!
