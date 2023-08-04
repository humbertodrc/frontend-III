import {defaultLocale} from "@/locale/constants";
import Home, {getStaticProps} from "@/pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from 'react'

// Importa la librería jest-fetch-mock y configúrala antes de las pruebas
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

// Restaura la implementación original de fetch después de las pruebas
afterEach(() => fetchMock.resetMocks());

// Mock the Next.js useRouter hook
jest.mock("next/router", () => ({
	useRouter: () => ({
		locale: "es-ES", // Cambia el idioma al que necesitas probar (por ejemplo, 'en' para inglés)
		asPath: "/",
	}),
}));

// Mock the CONTENT_BY_LOCALE object
jest.mock("../src/locale/index.ts", () => ({
	CONTENT_BY_LOCALE: {
		[defaultLocale]: {home: {title: "Bienvenido a la tienda"}}, // Agrega el contenido para 'es-ES'
	},
}));

function MockImage(props: any) {
  return React.createElement('img', props)
}
jest.mock('next/image', () => MockImage)


// Ahora puedes importar el módulo constants después de los mocks si es necesario
// import { defaultLocale } from '@/locale/constants';

describe("Home", () => {
	it("renders a heading", () => {
		render(<Home characters={[]} />);
		const heading = screen.getByText("Bienvenido a la tienda"); // Asegúrate de usar el texto correcto para el idioma que estés probando
		screen.debug();
		expect(heading).toBeInTheDocument();
	});

	it("fetches characters data from API", async () => {
		const characters = [
			{tail: "1", name: "Mario", image: "mario.png"},
			{tail: "2", name: "Luigi", image: "luigi.png"},
		];

		fetchMock.mockResponseOnce(JSON.stringify({amiibo: characters}));

		const {props} = await getStaticProps({});
		expect(props.characters).toEqual(characters);
	});

  it("renders a list of characters", () => {
    
		const characters = [
      {
        tail: "1",
        name: "Mario",
        image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png",
        amiiboSeries: "Super Smash Bros.",
        character: "Mario",
        gameSeries: "Super Mario",
        head: "00000000",
        release: {
          au: "2014-11-29",
          eu: "2014-11-28",
          jp: "2014-12-06",
          na: "2014-11-21",
        },
        type: "Figure",


      },
      {
        tail: "2",
        name: "Luigi",
        image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-000c0002.png",
        amiiboSeries: "Super Smash Bros.",
        character: "Luigi",
        gameSeries: "Super Mario",
        head: "00010000",
        release: {
          au: "2014-11-29",
          eu: "2014-11-28",
          jp: "2014-12-06",
          na: "2014-11-21",
        },
        type: "Figure",
      },
    ];

    render(<Home characters={characters} />);

    const characterNames = screen.getAllByRole("heading", {level: 3});
    expect(characterNames).toHaveLength(characters.length);
		
	});
});
