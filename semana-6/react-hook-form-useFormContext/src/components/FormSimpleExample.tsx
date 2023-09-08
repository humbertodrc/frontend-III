import { Box, Paper } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Inputs{
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}

export const Form = () => {

  const { register, handleSubmit, formState:{errors}} = useForm<Inputs>();

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const onsubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

  return (
    <Box sx={{maxWidth: 500}}>
      <Paper elevation={1} sx={{p: "32px", display: "flex", flexDirection: "column", gap: 3}}>
        <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label htmlFor="firstName">Nombre:</label>
          <input type="text" id="firstName" {...register('firstName', { required: true, minLength: 3, maxLength: 10 })} />
          {errors.firstName?.type === 'required' && <span>Este campo es requerido</span>}
          {errors.firstName?.type === 'minLength' && <span>El nombre debe tener al menos 3 caracteres</span>}
          {errors.firstName?.type === 'maxLength' && <span>El nombre debe tener menos de 10 caracteres</span>}
        </div>
        <div>
          <label htmlFor="lastName">Apellido:</label>
          <input type="text" id="lastName" {...register('lastName', {required: true, minLength: 5})} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register('email', {required: true, pattern: regex})} />
        </div>
        <div>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        </div>
        <button type="submit">Enviar</button>
        </form>
      </Paper>
    </Box>
  )
}
