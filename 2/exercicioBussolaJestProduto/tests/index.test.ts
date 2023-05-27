import { RandomArrayValue } from "../src/RandomArrayValue";






describe('Testando Partes da Classe RandomArrayValue', () => {

  test('Deve conter o mesmo número de repetições que o setado pelo usuário', () => {
    let random = new RandomArrayValue();
    random.setArray([
        {nome: "Arroz",
        qtde: 23,
        preco: 15},
        { 
        nome: "Feijao",
        qtde: 43,
        preco: 13
        },
        {
        nome: "Fruta",
        qtde:20,
        preco: 10
        }
       ])
    random.setNumeroArray(3);
    
    expect(random.getRandomObjects().length).toBe(3);
  });



  test('Não deve ter um contador maior do que o do tamanho da lista', () => {
    let random = new RandomArrayValue();
    random.setArray([
        {nome: "Arroz",
        qtde: 23,
        preco: 15},
        { 
        nome: "Feijao",
        qtde: 43,
        preco: 13
        },
        {
        nome: "Fruta",
        qtde:20,
        preco: 10
        }
       ])
    random.setNumeroArray(3);
    
    expect(random.checkNumberCompatibility()).toBe(true);
  });





});