import Head from "next/head";
import {FC} from "react";
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
				<meta
					name="description"
					content={description || "Amiibo API es una base de datos abierta de todos los amiibos de Nintendo, con imágenes de alta resolución, información de lanzamiento, información de la serie y más."}
				/>
				<meta
					name="keywords"
					content={keywords || "amiibo, nintendo, api, base de datos, amiibo api, amiiboapi"}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Redes sociales */}
				<meta property='og:title' content={title || "Ecommerce Amiibos"} />
				<meta property='og:description' content={description || "Amiibo API es una base de datos abierta de todos los amiibos de Nintendo, con imágenes de alta resolución, información de lanzamiento, información de la serie y más."} />
				<meta property='og:image' content='/img/mario.jpg' />
				<meta property='og:type' content='website' />
				<link rel="icon" href="/favicon.ico" />
				<meta charSet='utf-8' />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
		</>
	);
};
