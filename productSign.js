
function productSign(n, m) {
  // corps de la fonction ici
  return n * m < 0 ? -1 : n * m > 0 ? 1 : 0;
  
}

module.exports = productSign;