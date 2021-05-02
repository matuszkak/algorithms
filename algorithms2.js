const names = ['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti'];


for (i = 0; i <= 6; i++) {
  if (names[i] === 'Gábor') {
    console.log('Gábor szerepel a szaknévsorban a(z) ' + (i + 1) + '. helyen.');
  }
}

console.log('--------------')

const nums = [4, 2, 2, 1, 1];
let sum = 0;
for (i = 0; i <= 4; i++) {
  sum = sum + nums[i];
}
console.log(sum);

console.log('--------------')

const nums = ['a', 4, 2, 2, 1, 1];
let sum = 0;
for (i = 0; i <= 5; i++) {
  if (isNaN(nums[i])) {
    console.log('Hopp, ez nem szám lesz kispajtás!');
  } else {
    sum = sum + nums[i];
  }
}
console.log('A végeredmény: ' + sum);


console.log('--------------')

const nums = ['a', '4', 2, 2, 1, 1];
let sum = 0;
for (i = 0; i <= 5; i++) {
  if (isNaN(nums[i])) {
    console.log('Hopp, ez nem szám lesz kispajtás!');
    if (isNaN(parseInt(nums[i]))) {
      console.log('És nem is tudtuk számmá alakítani!');
    } else {
      console.log('De számmá tudtuk alakítani!');
      sum = sum + nums[i];
    }
  } else {
    sum = sum + nums[i];
  }
}
console.log('A végeredmény: ' + sum);
