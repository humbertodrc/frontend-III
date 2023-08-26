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
import theme, { roboto } from '../theme'; // Importa el tema y otros estilos si es necesario
import createEmotionCache from '../createEmotionCache'; // Importa la función para crear la caché de Emotion
import { MyAppProps } from './_app'; // Importa la interfaz de props de MyApp

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
  return (
    <Html lang="en" className={roboto.className}>
      <Head>
        {/* Define metadatos, icono y etiquetas de estilos de Emotion */}
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

// getInitialProps pertenece a `_document` (en lugar de `_app`),
// es compatible con la generación de sitios estáticos (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // Orden de resolución
  // ... (los comentarios explicando el orden de resolución se mantienen aquí)
  
  // Crea una instancia de caché de estilos de Emotion para el SSR
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  // Sobrescribir el método renderPage del contexto y luego poder usar originalRenderPage para renderear la página con la caché de Emotion correctamente en _document.tsx.
  const originalRenderPage = ctx.renderPage;

  // Sobreescribe renderPage para incluir la caché de Emotion en las props
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & MyAppProps>) =>
        function EnhanceApp(props: any) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // Esto es importante. Evita que Emotion renderice HTML inválido.
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
