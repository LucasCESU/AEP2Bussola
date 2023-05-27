import { Matemagica } from "../src/Matemagica";


describe('Testando Operações da Matemágica', () => {

  test('sums 1 + 2 to equal 3', () => {
    const materiaisObjeto = new Matemagica();
    materiaisObjeto.setA(1);
    materiaisObjeto.setB(2);
    expect(materiaisObjeto.sum()).toBe(3);
  });

  test('subtracts 3 - 2 to equal 1', () => {
    const materiaisObjeto = new Matemagica();
    materiaisObjeto.setA(3);
    materiaisObjeto.setB(2);
    expect(materiaisObjeto.subtraction()).toBe(1);
  });

  test('divides 10 / 2 to equal 5', () => {

    const materiaisObjeto = new Matemagica();
    materiaisObjeto.setA(10);
    materiaisObjeto.setB(2);
    expect(materiaisObjeto.division()).toBe(5);
  });

  test('multiplicates 8 * 3 to equal 24', () => {
    const materiaisObjeto = new Matemagica();
    materiaisObjeto.setA(8);
    materiaisObjeto.setB(3);
    expect(materiaisObjeto.multiplication()).toBe(24);
  });

});