import { Layout } from '@/components/layouts';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Character } from '../../interface/character';
import { Card } from '@/components/ui/Card';

const CharacterPage = () => {

  const {query} = useRouter();

  // console.log(router.query);

  const [character, setCharacter] = useState<Character>({} as Character)

  const getCharater = async () => {
    const res = await fetch(`https://amiiboapi.com/api/amiibo/?tail=${query.id}`)
    const data = await res.json()
    const characterapi = data.amiibo[0]
    setCharacter(characterapi)
  }

  useEffect(() => {
    getCharater()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  console.log(character);

  return (
    <Layout title={character.name} description={`Pagina del personaje ${character.name}`}>
      <h1>Character Page</h1>
      <Card character={character} />
    </Layout>
  )
}

export default CharacterPage;