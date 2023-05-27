import mongoose from "mongoose";







const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: [{}]
  },
  stats: {
    type: [{}]
  },
  pokedexNumber: {
    type: Number
  },
  height: {
    type: Number
  },
  weight: {
    type: Number
  },
  moves: { 
    type: [String],
    required: false
  }
});

const pokemonModel = mongoose.model("Pokemon", pokemonSchema);

export default pokemonModel;
