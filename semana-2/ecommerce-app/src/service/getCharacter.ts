import { Character } from '@/interface';

export const getCharacter = async (id: string): Promise<Character> => {
  const res = await fetch(
    `https://www.amiiboapi.com/api/amiibo/?tail=${id}`
  );
  const data = await res.json();
  return data.amiibo[0];
};