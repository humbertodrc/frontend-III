import createCache from '@emotion/cache';

// Comprueba si el entorno es un navegador
const isBrowser = typeof document !== 'undefined';

// En el lado del cliente, crea una etiqueta meta en la parte superior del <head>
// y establece esta etiqueta como punto de inserción para los estilos.
// Esto asegura que los estilos de MUI se carguen primero y permite a los desarrolladores
// sobrescribir fácilmente los estilos de MUI con otras soluciones de estilos, como CSS modules.
export default function createEmotionCache() {
  let insertionPoint;

  // Si estamos en el navegador (cliente), busca la etiqueta meta "emotion-insertion-point"
  // para usarla como punto de inserción para los estilos
  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  // Crea una caché de estilos de Emotion con un nombre clave ("mui-style")
  // y usa el punto de inserción determinado anteriormente
  return createCache({ key: 'mui-style', insertionPoint });
}