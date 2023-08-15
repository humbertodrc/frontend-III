import {Layout} from "@/components/layouts/Layout";
import {useRouter} from "next/router";
import {useState} from "react";
import styles from "./Login.module.css";

const LoginPage = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const hanldeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const response = await fetch("http://localhost:3000/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});

		if (response.status === 200) {
			// Puedo manejar un estado global para saber si el usuario está logueado o no
			// y así poder mostrar o no el botón de logout

			router.push("/admin");
		} else {
			console.log("Error al iniciar sesión");
		}
	};

	return (
		<Layout title="Login">
			<h1>Login</h1>
			<form className={styles.form} onSubmit={hanldeSubmit}>
				<div className={styles['form-control']}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={user.email}
						onChange={handleChange}
					/>
				</div>
				<div className={styles['form-control']}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={user.password}
						onChange={handleChange}
					/>
				</div>

				<button className={styles.button} type="submit">Login</button>
			</form>
		</Layout>
	);
};

export default LoginPage;
