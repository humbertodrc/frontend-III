import { Layout } from "@/components/layouts/Layout";
import { Card } from "@/components/ui/card";
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Character } from "../../interface/character";

interface Props {
	character: Character;
}

const CharacterPage:NextPage<Props> = ({character}) => {
	
	return (
		<Layout title="Character">
			<Card character={character} />
		</Layout>
	);
};

export const getStaticPaths:GetStaticPaths = async (locales) => {

	const idiomas = locales.locales as string[];

	const characters = await fetch("https://www.amiiboapi.com/api/amiibo/");
	const resp = await characters.json();
	const data = resp.amiibo.slice(0, 20);

	// Obtener los paths para los personajes junto con los locales
	const paths = data.flatMap((character: Character) =>
    idiomas.map((locale: string) => ({ params: { id: character.tail }, locale }))
	);

	return {
		paths,
		fallback: false
	}

}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	
	const id = params?.id;

	try {
		const res = await fetch(
			`https://www.amiiboapi.com/api/amiibo/?tail=${id}`
		);
		const data = await res.json();
		const character = data.amiibo[0];
		return {
			props: {
				character,
			},
		};
	} catch (error) {
		console.error('No se pudo obtener el personaje', error);
		return {
			notFound: true
		}
	}
	
};

export default CharacterPage;
