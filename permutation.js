// n개의 요소로 이루어진 배열에서 r개를 뽑는 순열을 모두 출력
// 배열이 오름차순으로 정렬되지 않았다면 정렬해줍시다.

let arr = [1, 2, 3, 4, 5];
let cnt = 0;

function permutation(n, r, depth) {
  if (r === depth) {
    let unit = arr.slice(0, r);
    console.log(unit);
    cnt++;
    return;
  }

  for (let i = depth; i < n; i++) {
    [arr[i], arr[depth]] = [arr[depth], arr[i]];
    permutation(n, r, depth + 1);
    [arr[i], arr[depth]] = [arr[depth], arr[i]];
  }
}

permutation(5, 3, 0);
console.log(cnt);

// 순열의 개수만 필요하다면 공식을 사용할 수 있습니다.
// nPr = n! / (n-r)!
