const DEFAULT_COUNTRY_CODE = 'NL';
const DEFAULT_BANK_CODE = 'TYPE';

for (var i = 0; i < 2; i++) {
  let j = i;
  console.log(i, j);
}

// 0 0
// 1 1

for (var i = 0; i < 2; i++) {
  let j = i;
  setTimeout(function () {
    console.log(i, j);
  }, 0);
}

// 2 0
// 2 1
