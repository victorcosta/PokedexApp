import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=30';

export const ListPokedex = async () => {
    const { data } = await axios.get(API_URL);
    return data;
};