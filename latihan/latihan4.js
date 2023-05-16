/**
 * Melakukan looping dari angka 1 hingga n sambil mencetak nilai loop ke terminal.
 * Menghasilkan 'Fizz' ke terminal apabila nilai dapat dibagi tiga, 'Buzz' apabila dapat dibagi 5, dan 'FizzBuzz' apabila dapat dibagi tiga dan lima.
 * Selain tiga kondisi itu, maka hasilkan nilai nya langsung.
 * @namespace Latihan
 * @method fizzBuzz
 * @param {Number} n panjang loop
 */
function fizzBuzz(n) {
  // TODO: lakukan looping sebanyak n kali dan cetak nilai n
  // atau fizz, buzz, atau fizzbuzz tergantung nilai n pada setiap iterasi
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;
fizzBuzz(15);
