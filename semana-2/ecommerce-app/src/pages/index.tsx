import { Layout } from "@/components/layouts/Layout";
import { Card } from "@/components/ui/card";
import styles from "@/styles/Home.module.css";
import { GetStaticProps, NextPage } from 'next';
import { Character } from "../interface";
import { useRouter } from 'next/router';
import { CONTENT_BY_LOCALE } from '@/locale';
import { defaultLocale } from '@/locale/constants';
import { getCharacters } from '@/service';

interface Props {
	characters: Character[];
}

const Home: NextPage<Props> = ({ characters }) => {
	
	const { locale = defaultLocale } = useRouter();
	
	const localeConten = CONTENT_BY_LOCALE[locale as keyof typeof CONTENT_BY_LOCALE]

	const {home} = localeConten;

	return (
		<Layout title='Home - Ecommerce'>
			<h1>{home.title}</h1>
			<div className={styles.grid}>
				{characters?.map((character) => (
					<Card key={character.tail} character={character} />
				))}
			</div>
		</Layout>
	);
}

export const getStaticProps:GetStaticProps = async () => {
	
	const data = await getCharacters()
	
	return {
		props: {
			characters: data
		}
	}
};

export default Home;
