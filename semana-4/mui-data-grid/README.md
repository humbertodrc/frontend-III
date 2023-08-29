1 Instalar Material UI

``` sh
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto @mui/icons-material
```

2 Modificar el archivo _document.tsx en caso de agregar fuente por cdn
  
``` tsx
import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
	return (
		<Html lang="es">
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
```

3 Modificar el archico _app.tsx

``` tsx
import "@/styles/globals.css";
import {CssBaseline, ThemeProvider, createTheme} from "@mui/material";
import type {AppProps} from "next/app";

const basicTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

export default function App({Component, pageProps}: AppProps) {
	return (
		<ThemeProvider theme={basicTheme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
```

4 Borrar los estilos globales de _app.css y el Home.module.css borrarlo


5 Instalar Data grid

``` sh
npm install @mui/x-data-grid
```

