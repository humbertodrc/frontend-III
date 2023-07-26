import { Card } from '@/components/Card';
import { Character } from '@/interface/character';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'

interface Props {
  character: Character
}

const ProductPage:NextPage<Props> = ({ character }) => {

  return (
    <div>
      <h1>Product {character.name}</h1>
      <Card character={character} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const characters = await fetch("https://amiiboapi.com/api/amiibo/")
  const resp = await characters.json()
  const data = resp.amiibo.slice(0, 20)

  const paths = data.map((item: Character) => ({ params: { id: item.tail } }))
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  
  const character = await fetch(`https://amiiboapi.com/api/amiibo/?tail=${id}`)
  const resp = await character.json()

  return {
    props: {
      character: resp.amiibo[0]
    }
  }

}

export default ProductPage;