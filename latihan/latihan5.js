/**
 * Hasilkan nilai faktorial dari n
 * @namespace Latihan
 * @method factorial
 * @param {Number} n number
 * @return {Number} hasil faktorial
 */
function factorial(n) {
  // TODO: hasilkan nilai faktorial sebagai return value
  // apabila n < 0, maka hasilkan nilia undefined
  //   let angka = "";
  //   for (let i = n; i >= 0; i--) {
  //     // angka
  //     console.log((angka += i));
  //   }

  if (n < 0) {
    return null;
  }
  let result = 1;
  for (let index = n; index > 1; index--) {
    result = result * index;
    // console.log(index);
  }
  return result;

  //   if(n == 0){
  //     return 1;
  //   }
  //   return n * factorial(n - 1)
}
module.exports = factorial;
// factorial(0);
// factorial(1);
factorial(5);
// factorial(10);
