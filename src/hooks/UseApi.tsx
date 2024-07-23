import { useEffect, useState } from 'react';
import { Product } from '../screens/HomeScreen/HomeScreen';
import axios from 'axios';

export const useApi = () => {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setIsLoading(true);

    try {
      const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=30';
      const { data } = await axios.get(API_URL);
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
