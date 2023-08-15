import { Layout } from "@/components/layouts/Layout";
import { Card } from "@/components/ui/card";
import { CONTENT_BY_LOCALE } from '@/locale';
import styles from "@/styles/Home.module.css";
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Character } from "../interface";
import { getCharacters } from '@/service';

interface Props {
	characters: Character[];
}

const Home: NextPage<Props> = ({ characters }) => {
	
	const { locale } = useRouter();
	
	const localeContent = CONTENT_BY_LOCALE[locale as keyof typeof CONTENT_BY_LOCALE]

	const {home} = localeContent;

	return (
		<Layout title='Home'>
			<h1>{home.title }</h1>
			<div className={styles.grid}>
				{characters?.map((character) => (
					<Card key={character.tail} character={character} />
				))}
			</div>
		</Layout>
	);
}

export const getStaticProps = async () => {
	
	const data = await getCharacters();
	return {
		props: {
			characters: data
		}
	}
};

export default Home;
