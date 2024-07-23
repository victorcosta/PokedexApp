import { useEffect, useState } from 'react';
import { PokedexService, Pokedex } from '../services/Pokedex.service';

export const useHomeApi = () => {
  const [data, setData] = useState<Pokedex[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setIsLoading(true);

    try {
      const { data } = await PokedexService.list();
      setData(data.results);
    } catch (_) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading, error };
};
