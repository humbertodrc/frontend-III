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
