/**
 * Menghasilkan persegi dengan tinggi dan lebar yang ditentukan
 * @namespace Latihan
 * @method printRectangle
 * @param {Number} length lebar
 * @param {Number} height tinggi
 */
function printRectangle(length, height) {
  // TODO: gunakan looping untuk membuat persegi panjang
  for (let i = 0; i < height; i++) {
    console.log("* ".repeat(length).trimEnd());
  }
}

module.exports = printRectangle;
