import { Button, FormControl, InputLabel, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";

interface DataForm {
	name: string;
	lastName: string;
	gender: string;
}

export const Form = () => {
	const {
		control,
		register,
		formState: {errors},
		handleSubmit,
		getValues,
	} = useForm<DataForm>();

	// const prueba = register('name')
	// console.log(prueba);

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
					<Controller
						name="name"
						control={control}
						defaultValue={""}
						// Objeto con las reglas de validación ejem: required: true, minLength: 2, maxLength: 10
						rules={{required: true}}
						render={({field}) => (
							<TextField
								{...field}
								type="text"
								label="Nombre"
								variant="outlined"
								fullWidth
								sx={{mb: 2}}
							/>
						)}
					/>

					{errors.name && <span>Este campo es requerido</span>}

					<Controller
						name="lastName"
						control={control}
						defaultValue={""}
						// Objeto con las reglas de validación ejem: required: true, minLength: 2, maxLength: 10
						rules={{required: true}}
						render={({field}) => (
							<TextField
								{...field}
								type="text"
								label="Apellido"
								variant="outlined"
								fullWidth
								sx={{mb: 2}}
							/>
						)}
					/>

					{errors.lastName && <span>Este campo es requerido</span>}

					{/* Se debe utilizar un FormControl */}
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

					{errors.gender && <span>Este campo es requerido</span>}

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
