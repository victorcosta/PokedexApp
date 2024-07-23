import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { PokedexService } from './Pokedex.service';

describe('PokedexService', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it('fetches data successfully', async () => {
    const mockData = {
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
      ]
    };

    mock
      .onGet('https://pokeapi.co/api/v2/pokemon?limit=30')
      .reply(200, mockData);

    const data = await PokedexService.list();
    expect(data.data).toEqual(mockData);
  });

  it('handles errors', async () => {
    mock.onGet('https://pokeapi.co/api/v2/pokemon?limit=30').reply(500);

    await expect(PokedexService.list()).rejects.toThrow(
      'Status: 500 - Request failed with status code 500'
    );
  });
});
