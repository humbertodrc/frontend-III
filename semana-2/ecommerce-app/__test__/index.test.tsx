import { defaultLocale } from "@/locale/constants";
import Home from "@/pages";
import React from 'react';
import { getCharacters } from '@/service';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock the Next.js useRouter hook
jest.mock("next/router", () => ({
	useRouter: () => ({
		locale: "es-ES", // Cambia el idioma al que necesitas probar (por ejemplo, 'en-US' para inglés)
		asPath: "/",
	}),
}));

// Mock the CONTENT_BY_LOCALE object
jest.mock("../src/locale/index.ts", () => ({
	CONTENT_BY_LOCALE: {
		[defaultLocale]: {home: {title: "Bienvenido a la tienda"}}, // Agrega el contenido para 'es-ES'
	},
}));

// Mock getCharacters
jest.mock('../src/service/index.ts', () => ({
  getCharacters: jest.fn(),
}));

// Next Link Error: https://github.com/vercel/next.js/issues/53272
function MockImage(props: any) {
  const { priority, ...otherProps } = props;
  return React.createElement('img', { ...otherProps, priority: priority ? "true" : undefined });
}
jest.mock('next/image', () => MockImage)


describe("Home", () => {
	it("renders a heading", () => {
		render(<Home characters={[]} />);
		const heading = screen.getByText("Bienvenido a la tienda");
		// screen.debug();
		expect(heading).toBeInTheDocument();
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

    (getCharacters as jest.Mock).mockResolvedValue(characters)

    render(<Home characters={characters} />);

    screen.debug();
  
	});
});
