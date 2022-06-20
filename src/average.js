/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;;
*/

const arrayNull = (array) => {
  if (array.length === 0) {
    return true;
  } return false;
};

const arrayCheck = (array) => {
  if (arrayNull(array) === false) {
    return array.every((element) => typeof element === 'number');
  } return false;
};

const average = (array) => {
  if (arrayCheck(array) === true) {
    let arraySum = 0;
    for (const x of array) {
      arraySum += x;
    }
    return Math.round(arraySum / array.length);
  } return undefined;
};

module.exports = average;
