import Head from "next/head";
import {FC} from "react";
import { Navbar } from '../ui/navbar';

interface Props {
  children: React.ReactNode;
  title: string
  description?: string
  keywords?: string
}

export const Layout: FC<Props> = ({children, title}) => {
	return (
		<>
			<Head>
        <title>{title}</title>
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
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
		</>
	);
};
