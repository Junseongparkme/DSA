// 최대공약수

function gcd(a, b) {
  if (a === 0) {
    return b;
  }
  return gcd(b % a, a);
}

const result = gcd(30, 72);
console.log(result);

// 최소공배수

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const res = lcm(30, 72);
console.log(res);
