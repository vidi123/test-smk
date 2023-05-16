/**
 * Menghasilkan persegi empat dengan panjang 5 unit ke terminal
 * @namespace Latihan
 * @method printSquare
 * @param {Number} length panjang
 */
function printSquare(length) {
  // TODO: Gunakan looping untuk menghasilkan panjang dan lebar persegi empat
  for (let i = 1; i <= length; i++) {
    console.log("* * * * *");
  }
}
module.exports = printSquare;
printSquare(5);
