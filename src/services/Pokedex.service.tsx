import axios from 'axios';

export interface Pokedex {
  name: string;
  url: string;
}

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=30';
export const PokedexService = {
  list: async (): Promise<any> => {
    try {
      const data = await axios.get(API_URL);
      return data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        throw new Error(`Status: ${err.response.status} - ${err.message}`);
      }
    }
  }
};
