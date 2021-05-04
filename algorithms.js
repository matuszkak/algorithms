const nums = [3, 4, 9, 6, 2];
const result = [];

for (let i = 0; i <= 4; i++) {
  if (nums[i] % 2 === 0) {
    result[i] = 'osztható';
  } else {
    result[i] = 'nem osztható';
  }
  console.log(nums[i] + ': ' + result[i]);
}

console.log('-------------');

const players = ['Peter', 'Kate', 'John'];
for (let i = 0; i <= 2; i++) {
  console.log(i + 1 + '. ' + players[i]);
}

console.log('-------------');


function types(p) {
  const a = [];
  for (let i = 0; i < 3; i++) {
    a.push(typeof (p[i]));
  }
  return a;
}

const x = [' ', 4, true];
console.log(types(x));