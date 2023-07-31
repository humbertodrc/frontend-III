import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export const Navbar = () => {
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
			</ul>
		</nav>
	);
};
