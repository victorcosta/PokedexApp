import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { useHomeApi } from './UseHomeApi';

describe('useApi', () => {
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

    const { result, waitForNextUpdate } = renderHook(() => useHomeApi());

    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockData.results);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(false);
  });

  it('handles errors', async () => {
    mock.onGet('https://pokeapi.co/api/v2/pokemon?limit=30').reply(500);

    const { result, waitForNextUpdate } = renderHook(() => useHomeApi());

    await waitForNextUpdate();

    expect(result.current.data).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(true);
  });

  it('sets loading state correctly', async () => {
    mock.onGet('https://pokeapi.co/api/v2/pokemon?limit=30').reply(() => {
      return new Promise(resolve => {
        setTimeout(() => resolve([200, { results: [] }]), 100);
      });
    });

    const { result, waitForNextUpdate } = renderHook(() => useHomeApi());

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
  });
});
