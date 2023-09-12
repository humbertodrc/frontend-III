import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import confetti from "canvas-confetti";
import { useFormContext } from "react-hook-form";


export const Form = () => {

	const { handleSubmit } = useFormContext();
	
	const onSubmit = (data: any) => {
		console.log(data);
		confetti({
			zIndex: 999,
			particleCount: 100,
			spread: 160,
			angle: -100,
			origin: {
				x: 1,
				y: 0,
			},
		});
	};


	return (
		<Box sx={{maxWidth: "500px"}}>
			<Paper
				elevation={1}
				sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
			>
				<Typography variant="h4" align="center">
					Agregar nuevo ingrediente
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>

				</form>
			</Paper>
		</Box>
	);
};
