import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../theme'; // Importa el tema de Material-UI
import createEmotionCache from '../createEmotionCache'; // Importa la función para crear la caché de Emotion

// Crea una instancia de caché de estilos de Emotion para el lado del cliente
const clientSideEmotionCache = createEmotionCache();

// Define una interfaz que extiende las props de AppProps y agrega una propiedad opcional de caché de Emotion
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Define el componente principal de la aplicación
export default function MyApp(props: MyAppProps) {
  // Desestructura las props en Component, emotionCache y pageProps
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        {/* Agrega metadatos al encabezado HTML */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline establece una línea de base de estilos consistentes */}
        <CssBaseline />
        {/* Renderiza la página actual pasando sus props */}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
