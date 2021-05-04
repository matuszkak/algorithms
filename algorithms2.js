function whereisgabor(n) {
  for (i = 0; i < n.length; i++) {
    if (n[i] === 'Gábor') {
      console.log('Gábor szerepel a szaknévsorban a(z) ' + (i + 1) + '. helyen.');
    }
  }
}

const names = ['István', 'Katalin', 'Attila', 'Gábor', 'Péter', 'Anna', 'Kitti'];
whereisgabor(names);

console.log('--------------')

function osszeg(gg) {
  let sum = 0;
  for (i = 0; i < gg.length; i++) {
    sum = sum + gg[i];
  }
  console.log(sum);
}

// futtassuk is ügyesen
const nums = [4, 2, 2, 1, 1];
osszeg(nums);

console.log('--------------')

function osszeg2(hh) {
  let sum2 = 0;
  for (i = 0; i < hh.length; i++) {
    if (typeof nums2[i] !== 'number') {
      console.log('Hopp, nem mind szám lesz kispajtás!');
    } else {
      sum2 = sum2 + hh[i];
    }
  }
  console.log('A végeredmény: ' + sum2);
}

// futtassuk is ügyesen
const nums2 = ['a', 4, 4, 2, 1, 1];
osszeg2(nums2);

console.log('--------------')

function osszeg3(jj) {

  let sum3 = 0;
  for (i = 0; i < jj.length; i++) {
    // ha szám akkor hozzáadjuk ügyesen
    if (typeof jj[i] === 'number') {
      sum3 = sum3 + parseInt(jj[i]);
      // ha nem szám...
    } else {
      // ... akkor megpróbáljuk számmá alakítani
      jj[i] = parseInt(jj[i]);
      // ha nem sikerül...
      if (isNaN(parseInt(jj[i]))) {
        console.log('Hopp, a(z) ' + (i + 1) + '. nem szám kispajtás és nem is tudtuk számmá alakítani!');
        // ha sikerül...
      } else {
        sum3 = sum3 + parseInt(jj[i]);
        console.log('A(z) ' + (i + 1) + '. nem szám de okosan azzá alakítottuk!');
      }
    }
  }
  console.log('A végeredmény: ' + sum3);
}

// futtassuk is ügyesen
const nums3 = ['a', '4', 2, 2, 1, 1];
osszeg3(nums3);