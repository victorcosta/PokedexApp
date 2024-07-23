import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { useHomeApi } from './useHomeApi';
import { PokedexService } from '../services/Pokedex.service';

// Mock the PokedexService
jest.mock('../services/Pokedex.service');

describe('useHomeApi', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
    jest.clearAllMocks();
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

    // Mock the service to return the expected data
    (PokedexService.list as jest.Mock).mockResolvedValue({ data: mockData });

    const { result, waitForNextUpdate } = renderHook(() => useHomeApi());

    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockData.results);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(false);
    expect(PokedexService.list).toHaveBeenCalledTimes(1);
  });

  it('handles errors', async () => {
    // Mock the service to throw an error
    (PokedexService.list as jest.Mock).mockRejectedValue(
      new Error('Network error')
    );

    const { result, waitForNextUpdate } = renderHook(() => useHomeApi());

    await waitForNextUpdate();

    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(true);
    expect(PokedexService.list).toHaveBeenCalledTimes(1);
  });

  it('sets loading state correctly', async () => {
    // Mock the service to delay the response
    (PokedexService.list as jest.Mock).mockImplementation(() => {
      return new Promise(resolve => {
        setTimeout(() => resolve({ data: { results: [] } }), 100);
      });
    });

    const { result, waitForNextUpdate } = renderHook(() => useHomeApi());

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
  });
});
