const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função "createMenu"', () => {
  describe('Verifica se a função "createMenu" tem o comportamento esperado', () => {
    it('TESTE 1: Verifique se função "createMenu()" retorna um objeto que possui a chave "fetchMenu", a qual tem como valor uma função.', () => {
    const data = createMenu()

    expect(typeof data.fetchMenu).toBe('function')

    })

    it('TESTE 2: Verifique se "objetoRetornado.fetchMenu()" retorna um objeto cujas chaves são somente "food" e "drink", considerando que a função createMenu() foi chamada com o objeto: "{ food: {}, drink: {} }"', () => {
      const paramMock = { food: {}, drink: {}}

      const data = createMenu(paramMock)

      expect(data.fetchMenu()).toBe(paramMock)
    })

    it('TESTE 3: Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função "objetoRetornado.fetchMenu()"', () => {
      const paramMock = { food: { coxinha: 2.9 }, drink: { agua: 2.5}}

      const data = createMenu(paramMock)

      expect(data.fetchMenu()).toStrictEqual(paramMock)
    })

    it('TESTE 4: Verifique se "objetoRetornado.consumption", após a criação do menu, retorna um array vazio.', () => {
      const data = createMenu()

      expect(data.consumption).toStrictEqual([])
      
    })

    it('TESTE 5: Verifique se, ao chamar uma função associada à chave "order" no objeto retornado, passando uma string como parâmetro (como "objetoRetornado.order("coxinha")"), tal string é adicionada ao array retornado em "objetoRetornado.consumption".', () => {
      const data = createMenu()

      data.order("coxinha")

      expect(data.consumption).toStrictEqual(["coxinha"])
    })

    it('TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array "objetoRetornado.consumption" contém os itens pedidos.', () => {
      const data = createMenu()
      const expected = ["coxinha", "coca-cola", "água sem gás"]

      data.order("coxinha")
      data.order("coca-cola")
      data.order("água sem gás")

      expect(data.consumption).toStrictEqual(expected)
    })

    it('TESTE 7: Verifique se a função "order" aceita que pedidos repetidos sejam acrescidos a "consumption".', () => {
      const data = createMenu()
      const expected = ["coxinha", "coca-cola", "coxinha"]

      data.order("coxinha")
      data.order("coca-cola")
      data.order("coxinha")

      expect(data.consumption).toStrictEqual(expected)
    })

    it('TESTE 8: Verifique se, ao chamar "objetoRetornado.pay()", retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em "objetoRetornado.consumption"', () => {
      const paramMock = { 
        food: {
          "coxinha": 2.9,
          "brigadeiro": 1.5,
        },
        drink: {
          "coca-cola": 3.9,
        } };

      const data = createMenu(paramMock)
      
      data.order("coxinha") // price 2.9
      data.order("coca-cola") // price 3.9
      data.order("brigadeiro") // price 1.5

      const sum = 2.9 + 3.9 + 1.5;
      const expectedPrice =  (sum + (sum * 0.1)).toFixed(1)

      expect(data.pay()).toBe(expectedPrice)
    })
  });
});
