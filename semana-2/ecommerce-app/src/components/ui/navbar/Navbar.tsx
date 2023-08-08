import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';
import { locales, localesNames } from '@/locale/constants';

export const Navbar = () => {

	const { locale, asPath } = useRouter();
	console.log(locale, asPath);

	return (
		<nav className={styles.navbar}>
			<div>
				<Link href="/">
					<Image src="/mario-logo.webp" alt="Logo App" width={40} height={80} />
				</Link>
			</div>
			<ul>
				<li>
					<Link href="/contacto">Contacto</Link>
				</li>
				<li>
					<Link href="/nosotros">Nosotros</Link>
				</li>
				<li>
					<Link href="/carrito">Carrito</Link>
				</li>
				<li className={styles.localeSwitch}>
					<Link href={asPath} locale={locales.ES_ES}>
						<p className={locale === locales.ES_ES ? styles.active : ""}>
							<Image
								src="/img/spanish.png"
								alt="Español"
								width={20}
								height={20}
							/>
							{localesNames[locales.ES_ES as keyof typeof localesNames]}
						</p>
					</Link>
					<Link href={asPath} locale={locales.EN_US}>
						<p className={locale === locales.EN_US ? styles.active : ""}>
							<Image
								src="/img/english.png"
								alt="Spanish"
								width={20}
								height={20}
							/>
							{localesNames[locales.EN_US as keyof typeof localesNames]}
						</p>
					</Link>
					<Link href={asPath} locale={locales.PT_BR}>
						<p className={locale === locales.PT_BR ? styles.active : ""}>
							<Image
								src="/img/portuguese.png"
								alt="Portugues"
								width={20}
								height={20}
							/>
							{localesNames[locales.PT_BR as keyof typeof localesNames]}
						</p>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
