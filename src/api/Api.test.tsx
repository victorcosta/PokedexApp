import axios from 'axios';
import { ListPokedex } from './Api';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ListPokedex', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      ],
    };

    mockedAxios.get.mockResolvedValue({ data });

    const result = await ListPokedex();

    expect(result).toEqual(data);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=30');
  });

  it('fetches erroneously data from an API', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));

    await expect(ListPokedex()).rejects.toThrow('Network Error');
  });
});
