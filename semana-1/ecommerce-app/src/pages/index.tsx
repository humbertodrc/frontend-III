import styles from "@/styles/Home.module.css";
import Head from "next/head";
import {useEffect, useState} from "react";
import { Character } from '../interface/index';
import { Card } from '@/components/Card';

export default function Home() {
	const [characters, setCharacters] = useState<Character[]>();

	const getCharacters = async () => {
		const characters = await fetch("https://www.amiiboapi.com/api/amiibo/");
    const resp = await characters.json();
    const data = resp.amiibo.slice(0, 20)
		setCharacters(data);
	};

	useEffect(() => {
		getCharacters();
	}, []);

	return (
		<>
			<Head>
				<title>Ecommerce App</title>
				<meta
					name="description"
					content="¡Encuentra tu colección de figuras Amiibo en nuestro eCommerce! Explora una amplia selección de personajes, como Mario, Zelda, Pokémon y muchos más. Conecta con tus personajes favoritos y desbloquea contenido especial en tus juegos. ¡Envío rápido y seguro garantizado!"
				/>
				<meta
					name="keywords"
					content="Figuras Amiibo, Colección Amiibo, Personajes de Videojuegos, Amiibo API, Mario, Zelda, Pokémon, Juguetes Interactivos, Desbloquear Contenido, Comprar Amiibo, Coleccionables de Juegos, Tienda de Amiibo."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${styles.main}`}>
        <h1>Bienvenido a mi sitio web</h1>
        <div className={styles.grid}>
          {characters?.map((character) => (
            <Card key={character.tail} character={character} />
          ))}
        </div>
			</main>
		</>
	);
}
