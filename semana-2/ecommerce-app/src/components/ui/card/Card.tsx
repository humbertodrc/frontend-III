import { Character } from "@/interface";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./Card.module.css";

interface Props {
	character: Character;
}

export const Card: FC<Props> = ({character}) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(`/character/${character.tail}`); // /character/000e0002
	};


	return (
		<div className={styles.card} onClick={handleClick}>
			<h3>{character.name}</h3>
			<Image
					src={character.image}
					alt={character.name}
					width={180}
					height={250}
					priority={true}
				/>
		</div>
	);
};
