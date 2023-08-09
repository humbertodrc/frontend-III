import { Layout } from "@/components/layouts/Layout";
import { Card } from "@/components/ui/card";
import { Character } from '@/interface';
import { getCharacter, getCharacters } from '@/service';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface Props {
	character: Character;
}

const CharacterPage:NextPage<Props> = ({character}) => {
	
	return (
		<Layout title="Character" description={character.name}>
			<Card character={character} />
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
	
	const idiomas = locales as string[];

	const data = await getCharacters();

	const paths = data.flatMap((character) => (
			idiomas.map((idioma) => ({params: {id: character.tail}, locale: idioma}))
	))
	
	return {
		paths,
		fallback: false,
	};

};

export const getStaticProps: GetStaticProps = async ({ params }) => {

	const id = params?.id as string;

	const character = await getCharacter(id);

	return {
		props: {
			character
		}
	}

};

export default CharacterPage;
