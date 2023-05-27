import { Request, Response } from "express";
import pokemonService from "./service";

class pokemonController{





    async getPokemonApi(req:Request, res:Response){
        const data = await new pokemonService().gravaJson();
        const pokemonsCriados = await new pokemonService().criaPokemons(data);
        res.json(data);
    }

    async getByType(req:Request, res:Response){
        const data = await new pokemonService().getByType(req.params.type);
        res.json(data);
    }

    async getByPokeNumber(req:Request, res:Response){
        const data = await new pokemonService().getByPokeNumber(req.params.pokenumber);
        res.json(data);
    }

    async getByPokeName(req:Request, res:Response){
        const data = await new pokemonService().getByPokeName(req.params.pokename);
        res.json(data);
    }


    async pokemonsMap(req:Request, res:Response){
        const data = await new pokemonService().mapeiaArray();
        res.json(data);
    }

    async makeTeam(req:Request, res:Response){
        const data = await new pokemonService().criaTeam(req.body);
        res.json(data);
    }

    async getTeam(req:Request, res:Response){
        const data = await new pokemonService().getTeam();
        res.json(data);
    }

    async updateTeam(req:Request, res:Response){
        const data = await new pokemonService().updateTeam(req.params.id, req.body);
        res.json(data);
    }


}

export default new pokemonController();
