import Home, {getServerSideProps} from "@/pages";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';

// Borrar todo el test para el ejercicio


// Cremos el mock de useRouter
jest.mock("next/router", () => ({
	useRouter: () => ({
		locale: "ES_ES",
		asPath: "/",
	}),
}));

const data = [
	{
		id: 1,
		title: "Mochila con correas",
		price: 7500,
		description:
			"Tu mochila perfecta para el dìa a dìa y salidas de fin de semana. Guarda tu notebook (hasta 15 pulgadas) en la funda acolchada, y protégela de los rayones y golpes",
		image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
		rating: 4,
	},
];

window.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(data),
	})
) as jest.Mock;

describe("Home", () => {
  // Test para comprobar que estamos obteniendo los datos de la API con getServerSideProps
	test("Should get the data using getServerSideProps", async () => {
		const response = await getServerSideProps({locale: "ES_ES"});

		expect(response).toEqual(
			expect.objectContaining({
				props: {
					data,
				},
			})
		);
  });
  
  // Test para comprobar que estan renderizando los productos que tenemos en data
  test("Should render the products", async () => {
    render(<Home data={data} />);

    // screen.debug();

    expect(screen.getByText("Mochila con correas")).toBeInTheDocument();
    expect(screen.getByText("Tu mochila perfecta para el dìa a dìa y salidas de fin de semana. Guarda tu notebook (hasta 15 pulgadas) en la funda acolchada, y protégela de los rayones y golpes")).toBeInTheDocument();
    expect(screen.getByAltText("Mochila con correas")).toBeInTheDocument();
    // Obtener por el precio pero sin formato
    expect(screen.getByText("$7.500")).toBeInTheDocument();
    
  });
});
