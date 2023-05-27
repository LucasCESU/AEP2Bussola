import { writeFile, readFile } from "fs/promises";
import pokemonModel from "./pokemonSchema";
import pokemonTeamModel from "./pokemonTeamSchema";

class pokemonService {
  async getDataApi() {
    try {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      let pokemons;

      await data.json().then((data) => {
        pokemons = data.results;
      });

      let pokemonsBuscados: any = [];

      for (let pokemon of pokemons) {
        const pokemonBuscado = await this.getSpecificPokemon(pokemon.url);
        pokemonsBuscados.push(pokemonBuscado);
      }

      return pokemonsBuscados;
    } catch (e) {
      console.log(e);
      return "Erro";
    }
  }

  async getSpecificPokemon(pokemonLink) {
    try {
      let pokemonAchado;
      const pokemon = await fetch(pokemonLink);
      await pokemon.json().then((data) => {
        pokemonAchado = data;
      });

      let movesFiltered: Array<string> = [];
      for (let i = 0; i < 4; i++) {
        if (typeof pokemonAchado.moves[i] !== "undefined") {
          movesFiltered.push(pokemonAchado.moves[i].move.name);
        }
      }

      const pokemonInfo = {
        name: pokemonAchado.name,

        type: pokemonAchado.types.map((type) => {
          const typeAtual = {
            name: type.type.name,
          };
          return typeAtual;
        }),

        stats: pokemonAchado.stats.map((stat) => {
          let statAtual = {
            name: stat.stat.name,
            valor: stat.base_stat,
          };
          return statAtual;
        }),

        pokedexNumber: pokemonAchado.game_indices.find(
          (pok) => pok.version.name == "firered"
        ).game_index,
        height: pokemonAchado.height,
        weight: pokemonAchado.weight,

        moves: movesFiltered,
      };

      return pokemonInfo;
    } catch (e) {
      console.log("erro: " + e);
      return "Erro";
    }
  }

  async gravaJson() {
    try {
      const jsonRecebido = await this.getDataApi();
      await writeFile("pokemons.json", JSON.stringify(jsonRecebido, null, 2));
      return jsonRecebido;
    } catch (e) {
      return "Erro";
    }
  }

  async criaPokemons(data: any) {
    try {
      const pokemonsCriados = await pokemonModel.insertMany(data);
      return pokemonsCriados;
    } catch (err) {
      console.log(err);
      return "Erro";
    }
  }

  async getByType(selectedType: any) {
    try {
      const pokemonPorTipo = await pokemonModel.find({type: {name: selectedType}});
      return pokemonPorTipo;
    } catch (err) {
      return ("Erro");
    }
  }

  async getByPokeNumber(pokeNumber: any) {
    try {
      const pokemonPorNumero = await pokemonModel.find({pokedexNumber: pokeNumber});
      return pokemonPorNumero;
    } catch (err) {
      return ("Erro");
    }
  }

  async getByPokeName(pokeName: any) {
    try {
      const pokemonPorNome = await pokemonModel.find({name: pokeName});
      return pokemonPorNome;
    } catch (err) {
      return ("Erro");
    }
  }


  async mapeiaArray() {
    try {
      let pokemonList: any = await readFile("pokemons.json", "utf8");
      pokemonList = JSON.parse(pokemonList);

      const pokemonsPorTipo = pokemonList.reduce(
        (todosPokemons, pokemonAtual) => {
          todosPokemons[pokemonAtual.type[0].name] =
            todosPokemons[pokemonAtual.type[0].name] || [];
          todosPokemons[pokemonAtual.type[0].name].push(pokemonAtual);
          return todosPokemons;
        },
        {}
      );

      await writeFile(
        "pokemonsPorTipo.json",
        JSON.stringify(pokemonsPorTipo, null, 2)
      );
      return pokemonsPorTipo;
    } catch (e) {
      console.log(e);
      return "Erro";
    }
  }

  async criaTeam(team: any) {
    try {
      const teamCreated = await pokemonTeamModel.create(team);
      return teamCreated;
    } catch (err) {
      console.log(err);
      return "Erro";
    }
  }

  async getTeam() {
    try {
      const teamFound = await pokemonTeamModel.find({});
      return teamFound;
    } catch (err) {
      console.log(err);
      return "Erro";
    }
  }

  async updateTeam(id: any, update: any) {
    try {
      const teamUpdated = await pokemonTeamModel.findByIdAndUpdate(id, update);
      return teamUpdated;
    } catch (err) {
      console.log(err);
      return "Erro";
    }
  }
}

export default pokemonService;
