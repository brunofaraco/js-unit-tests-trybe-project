const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  describe('Verifica se a função `productDetails` tem o comportamento esperado', () => {
     
    it('Teste se productDetails é uma função.', () => {expect(typeof productDetails).toEqual('function');});
    
    it('Teste se o retorno da função é um array.', () => {
    expect(productDetails('abacate', 'laranja')).toBeInstanceOf(Array);
    expect(Array.isArray(productDetails('abacate', 'laranja'))).toBeTruthy();});

    it('Teste se o array retornado pela função contém dois itens dentro.', () => {expect(Object.keys(productDetails('Copo', 'Saco de lixo')).length).toEqual(2);});

    it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof Object.keys(productDetails('Vodka', 'Energético')[0])).toEqual('object');
    expect(typeof Object.keys(productDetails('Vodka', 'Energético')[1])).toEqual('object'); });

    it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {expect(productDetails('Prato', 'Garfo')[0]).not.toEqual(productDetails('Prato', 'Garfo')[1]);});

    it('Teste se os dois productIds terminam com 123.', () => {
    expect(productDetails('Webcam', 'Microfone')[0].details.productId.endsWith('123')).toBeTruthy();
    expect(productDetails('Webcam', 'Microfone')[1].details.productId.endsWith('123')).toBeTruthy();});
  });
});
