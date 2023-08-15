import { Serie } from '@/interface';

export const getSeries = async () => {
  const response = await fetch('https://amiiboapi.com/api/amiiboseries/');
  const data: { amiibo: Serie[] } = await response.json();
  return data.amiibo;
};