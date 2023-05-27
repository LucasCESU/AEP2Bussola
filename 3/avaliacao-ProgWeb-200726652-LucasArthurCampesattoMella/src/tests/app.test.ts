import main from "../../index";





describe('Testando Partes da app.ts e index.ts', () => {

    test('Deve Retornar Deu certo caso o servidor lige corretamente', () => {  
      expect(main()).not.toBe("Nao deu certo");
    })
    
    }
    

    );