import { Character } from '@/interface';

export const getCharacters = async (): Promise<Character[]> => {
  const characters = await fetch("https://www.amiiboapi.com/api/amiibo/");
	const resp = await characters.json();
  const data = resp.amiibo.slice(0, 20);
  return data;
};