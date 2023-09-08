import { Button, FormControl, InputLabel, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
// import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { CustomTextField } from './Inputs/CustomTextField';
// Extra

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from '@hookform/error-message';


export const Form = () => {

	// Creamos el schema
	const schema = yup.object({
		name: yup.string().required("Este campo es requerido").min(2, "Mínimo 2 caracteres").max(10, "Máximo 10 caracteres"),
		lastName: yup.string().required("Este campo es requerido").min(2, "Mínimo 2 caracteres").max(10, "Máximo 10 caracteres"),
		email: yup.string().required("Este campo es requerido").email("El correo no es válido").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
		gender: yup.string().required("Es campo es requerido")
	})

	type DataForm = yup.InferType<typeof schema>

	const {
		control,
		register,
		formState: {errors},
		handleSubmit,
		getValues,
	} = useForm<DataForm>({resolver: yupResolver(schema), defaultValues: {}});

	const onSubmit = (data: any) => {
		console.log(data);
	};

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
					<CustomTextField
						name="name"
						label="Nombre"
						type="text"
						control={control}
						defaultValue=""
					/>

					<Typography variant='caption' color='red'>
						<ErrorMessage errors={errors} name="name" />
					</Typography>

					<CustomTextField
						name="lastName"
						label="Apellido"
						type="text"
						control={control}
						defaultValue=""
					/>
					

					<Typography variant='caption' color='red'>
						<ErrorMessage errors={errors} name="lastName" />
					</Typography>

					<CustomTextField
						name="email"
						label="Correo"
						type="email"
						control={control}
						defaultValue=""
					/>

					<Typography variant='caption' color='red'>
						<ErrorMessage errors={errors} name="email" />
					</Typography>

					<FormControl fullWidth>
						<InputLabel>Genero</InputLabel>
						<Controller
							name="gender"
							control={control}
							rules={{required: true}}
							defaultValue={""}
							render={({field}) => (
								<Select
									{...field}
									label="Género"
								>
									<MenuItem value="famale">Femenino</MenuItem>
									<MenuItem value="male">Masculino</MenuItem>
									<MenuItem value="other">Otro</MenuItem>
								</Select>
							)}
						/>
					</FormControl>

					<Typography variant='caption' color='red'>
						<ErrorMessage errors={errors} name='gender' />
					</Typography>

					<Box>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							sx={{mt: 2}}
						>
							Enviar
						</Button>
					</Box>
				</form>
			</Paper>
		</Box>
	);
};
