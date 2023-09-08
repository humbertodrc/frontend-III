import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormContext } from "react-hook-form";
import confetti from "canvas-confetti";
// Extra

import { useState } from 'react';
import { OtherData } from './OtherData';
import { PersonalData } from './PersonalData';

export const Form = () => {

	const [step, setStep] = useState(1)

	const {handleSubmit} = useFormContext();

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

	const nextStep = () => {
		setStep(step + 1)
	}

	const prevStep = () => {
		setStep(step - 1)
	}

	return (
		<Box sx={{maxWidth: "500px"}}>
			<Paper
				elevation={1}
				sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}
			>
				<Typography variant="h4" align="center">
					Datos personales
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>

					{step === 1 && <PersonalData />}

					{step === 2 && <OtherData />}

					<Box>
						{step > 1 && <Button onClick={prevStep}>Anterior</Button>}
						{step < 2 && <Button onClick={nextStep}>Siguiente</Button>}
						{step === 2 && <Button type="submit">Enviar</Button>}
					</Box>
				</form>
			</Paper>
		</Box>
	);
};
