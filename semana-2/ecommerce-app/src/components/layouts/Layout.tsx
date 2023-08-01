import Head from "next/head";
import { FC } from "react";
import { Navbar } from '../ui/navbar';

interface Props {
  children: React.ReactNode;
  title: string
  description?: string
  keywords?: string
}

export const Layout: FC<Props> = ({children, title, description, keywords}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="author" content="Humberto Rivero" />
				<meta
					name="description"
					content={description || "Amiibo API es una tienda de figuras interactivas que desbloquean contenido en tus juegos favoritos."}
				/>
				<meta
					name="keywords"
					content={keywords || "amiibo, nintendo, figuras, interactivas, juegos, videojuegos"}
				/>
				{/*Información compartida en redes sociales. Estos metadatos ayudan a las redes sociales y plataformas a mostrar vistas previas enriquecidas cuando los enlaces de la página se comparten. */}
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description || "Amiibo API es una tienda de figuras interactivas que desbloquean contenido en tus juegos favoritos."} />
				<meta property="og:type" content="website" />
				<meta property='og:image' content='/mario.jpg' />

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
		</>
	);
};
