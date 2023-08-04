// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
// tests/test-setup.js
// import { useRouter } from 'next/router';

// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }));

// const mockRouter = {
//   // Agrega las propiedades del router que estés utilizando en la página Home
//   // Por ejemplo, si necesitas 'locale', agrégalo aquí.
//   locale: 'es-ES',
// };

// useRouter.mockImplementation(() => mockRouter);