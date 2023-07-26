import {FC} from "react";
import { Character } from "@/interface/character";
import styles from "@/styles/Home.module.css";
import { useRouter } from 'next/router';
import Image from 'next/image';

interface Props {
	character: Character;
}

export const Card: FC<Props> = ({ character }) => {
  
  const router = useRouter()

  const handleClick = () => {
    router.push(`/product/${character.tail}`)
  }

	return (
		<div className={styles.card} onClick={handleClick}>
			<h3>{character.character}</h3>
			<p>{character.amiiboSeries}</p>
			<Image
				width={180}
				height={250}
				src={character.image}
				alt={character.character}
			/>
		</div>
	);
};
