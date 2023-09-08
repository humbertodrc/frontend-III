import {Typography} from "@mui/material";
import React from "react";
import {CustomTextField} from "./Inputs/CustomTextField";
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

export const PersonalData = () => {

  const {control, formState:{errors} }  = useFormContext();

	return (
		<>
			<CustomTextField
				name="name"
				label="Nombre"
				type="text"
				control={control}
				defaultValue=""
			/>

			<Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="name" />
			</Typography>

			<CustomTextField
				name="lastName"
				label="Apellido"
				type="text"
				control={control}
				defaultValue=""
			/>

			<Typography variant="caption" color="red">
        <ErrorMessage errors={errors} name="lastName" />
			</Typography>
		</>
	);
};
