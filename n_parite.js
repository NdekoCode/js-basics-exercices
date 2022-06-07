function nParite(n, parite) {
  // Si "parite" est "true" alors calcule la somme de n premiers nombres pairs
  // SI parité est "false" alors calcul  la somme de n premiers nombres impairs.

  /*Demarche

  // initialiser une variable Sum
// Verifier si une
*/
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (parite) {

      if (i % 2 === 0) {
        sum += i;
      }
    } else {

      if (i % 2 !== 0) {

        sum += i;
      }

    }
  }
  return sum;
}

module.exports = nParite;