import pokemonService from "../pokemon/service";

describe("Testando Partes da service.ts", () => {
  test("Não deve retornar erro caso a requisição funcione corretamente coletar os dados da API", () => {
    const service = new pokemonService();
    expect(service.getDataApi()).not.toBe("Erro");
  });

  test("Não deve retornar erro caso a requisição funcione corretamente coletar os dados de um Pokemon Específico", () => {
    const service = new pokemonService();
    expect(
      service.getSpecificPokemon("https://pokeapi.co/api/v2/pokemon/75/")
    ).not.toBe("Erro");
  });

  test("Não deve retornar erro ao gravar JSON", () => {
    const service = new pokemonService();
    expect(service.gravaJson()).not.toBe("Erro");
  });
  test("Não deve retornar erro ao mapear Array", () => {
    const service = new pokemonService();
    expect(service.mapeiaArray()).not.toBe("Erro");
  });

  test("Não deve retornar erro ao retornar Time", () => {
    const service = new pokemonService();
    expect(service.getTeam()).not.toBe("Erro");
  });

  test("Não deve retornar erro caso a requisição funcione corretamente para o get por tipo", () => {
    const service = new pokemonService();
    expect(service.getByType("grass")).not.toBe("Erro");
  });
  test("Não deve retornar erro caso a requisição funcione corretamente para o get por número", () => {
    const service = new pokemonService();
    expect(service.getByPokeNumber(1)).not.toBe("Erro");
  });
  test("Não deve retornar erro caso a requisição funcione corretamente para o get por nome", () => {
    const service = new pokemonService();
    expect(service.getByPokeName("bulbasaur")).not.toBe("Erro");
  });
});
