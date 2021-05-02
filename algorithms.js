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

const x = [' ', 4, true];
const a = [];
for (let i = 0; i <= 2; i++) {
  a.push(typeof (x[i]));
}
console.log(a);