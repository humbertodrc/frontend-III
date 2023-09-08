import {
	Typography,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import {CustomTextField} from "./Inputs/CustomTextField";
import { ErrorMessage } from '@hookform/error-message';

export const OtherData = () => {

  const {control, formState:{errors} }  = useFormContext();

	return (
		<>
			<CustomTextField
				name="email"
				label="Correo"
				type="email"
				control={control}
				defaultValue=""
			/>

			<Typography variant="caption" color="red">
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
						<Select {...field} label="Género">
							<MenuItem value="famale">Femenino</MenuItem>
							<MenuItem value="male">Masculino</MenuItem>
							<MenuItem value="other">Otro</MenuItem>
						</Select>
					)}
				/>
			</FormControl>

			<Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="email" />
			</Typography>
		</>
	);
};
