import { Router } from "express";
import pokemonController from "./pokemon/controller";


const routes = Router();

routes.post("/pokemons",  pokemonController.getPokemonApi);  
routes.get("/pokemons/:type", pokemonController.getByType);
routes.get("/pokemons/pokedex/:pokenumber", pokemonController.getByPokeNumber);
routes.get("/pokemons/name/:pokename", pokemonController.getByPokeName);


routes.post("/pokemonsmap", pokemonController.pokemonsMap);
routes.post("/pokemonteam", pokemonController.makeTeam);
routes.get("/pokemonteam", pokemonController.getTeam);
routes.put("/pokemonteam/:id", pokemonController.updateTeam);


export default routes;