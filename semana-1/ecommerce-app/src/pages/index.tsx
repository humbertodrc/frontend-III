import { Layout } from "@/components/layouts";
import { Card } from "@/components/ui/Card";
import styles from "@/styles/Home.module.css";
import { GetStaticProps, NextPage } from "next";
import { Character } from "../interface";
import { useRouter } from 'next/router';
import homeContentEn from '@/locale/en/home';
import homeContentEs from '@/locale/es/home';

interface Props {
	characters: Character[];
}

const Home: NextPage<Props> = ({ characters }) => {
	
	const { locale, defaultLocale } = useRouter();

	// console.log(locale);
	
	const content = locale === 'es' ? homeContentEs : homeContentEn;

	// console.log(content);

	return (
		<>
			<Layout title='Ecommerce App - DH' description='Ecommerce de Figuras coleccionables, Mario, Luigi'>
				<h1>{content.title}</h1>
				<div className={styles.grid}>
					{characters?.map((character) => (
						<Card key={character.tail} character={character} />
					))}
				</div>
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const character = await fetch("https://amiiboapi.com/api/amiibo/");
	const rest = await character.json();
	const data = rest.amiibo.slice(0, 20);

	return {
		props: {
			characters: data,
		},
	};
};

export default Home;
