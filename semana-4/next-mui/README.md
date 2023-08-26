# Agregar Material-UI a un Proyecto de Next.js

A continuación se describen los pasos para agregar Material-UI a un proyecto de Next.js. Material-UI es una biblioteca de componentes y estilos populares que puedes utilizar para construir interfaces atractivas y consistentes.

## Paso 1: Instalación

Instala los paquetes necesarios utilizando npm:

``` shell
npm install @mui/material @emotion/react @emotion/styled @emotion/server @emotion/cache
```

Para los iconos de Material-UI, instala también:
  
``` shell
npm install @mui/icons-material
```

## Paso 2: Modificar _app.tsx
Edita el archivo _app.tsx en la carpeta pages para integrar el tema y estilos de Material-UI. Agrega el siguiente código al archivo:

``` javascript
// _app.tsx
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
```

## Paso 3: Modificar _document.tsx
Modifica el archivo _document.tsx en la carpeta pages para gestionar la caché de estilos de Emotion y mejorar el rendimiento de carga. Agrega el siguiente código al archivo:

``` javascript
// _document.tsx
import * as React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { AppType } from 'next/app';
import theme, { roboto } from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { MyAppProps } from './_app';

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html lang="en" className={roboto.className}>
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
```

## Paso 4: Modificar theme.ts
Crea un archivo llamado theme.ts en la carpeta src para definir y exportar tu tema personalizado de Material-UI. Puedes personalizar los colores, tipografías y más en este archivo.

``` javascript
// theme.ts
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
```

## Paso 5: Crear createEmotionCache.ts
Crea un archivo llamado createEmotionCache.ts en la carpeta src para definir la caché de estilos de Emotion. Utiliza el código proporcionado en tus conversaciones anteriores para crear este archivo.
  
``` javascript
// createEmotionCache.ts
import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export default function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'mui-style', insertionPoint });
}
```


## Resumen:

La razón por la que se implementan estos cambios más complejos en los archivos _app.tsx y _document.tsx es para garantizar un renderizado de estilos consistente y óptimo en una aplicación de Next.js que utiliza Material-UI y Emotion para la gestión de estilos, especialmente en un entorno de Server Side Rendering (SSR).

El uso de la caché de estilos de Emotion y la configuración en _document.tsx puede parecer complicado, pero tiene varios beneficios:

Estilos coherentes en SSR: En el contexto de SSR, los estilos se generan tanto en el servidor como en el cliente. Al utilizar la caché de estilos de Emotion y la configuración en _document.tsx, se asegura de que los estilos generados en el servidor sean coherentes con los del cliente. Esto previene problemas como el parpadeo de estilos o cambios inesperados en la interfaz.

Orden adecuado de los estilos: En una aplicación grande con múltiples componentes y estilos, el orden de carga de los estilos es importante para que no haya conflictos ni sobrescritura de estilos. La configuración de _document.tsx permite controlar el orden en que se cargan los estilos y dónde se insertan en el documento.

Optimización de carga de estilos: Al extraer y cargar solo los estilos críticos necesarios para la página actual, se puede mejorar el rendimiento de carga inicial de la aplicación. Esto es especialmente importante en aplicaciones grandes.

Compatibilidad con la hoja de estilos global de Material-UI: La configuración en _app.tsx permite establecer una hoja de estilos global consistente para Material-UI, lo que garantiza que todos los componentes sigan el mismo tema y estilo.

Aunque la implementación puede parecer más compleja, estos cambios están diseñados para abordar desafíos específicos en la gestión de estilos en una aplicación de Next.js con Material-UI y Emotion. Si bien la primera implementación que mencionaste puede ser más sencilla, puede que no cubra todas las necesidades de rendimiento, coherencia de estilos y optimización que requieren las aplicaciones más grandes o complejas.

Si estás desarrollando una aplicación más pequeña o no enfrentas problemas de rendimiento o consistencia de estilos, la implementación más simple podría ser suficiente para tus necesidades. Siempre es importante evaluar las necesidades específicas de tu proyecto y decidir qué enfoque es el más adecuado para ti.
