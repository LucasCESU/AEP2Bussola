import mongoose from "mongoose";


const pokemonTeamSchema = new mongoose.Schema({
    trainerName: String,
    team: [{
    name: String
    }]
});

const pokemonTeamModel = mongoose.model("PokemonTeam", pokemonTeamSchema);

export default pokemonTeamModel;
