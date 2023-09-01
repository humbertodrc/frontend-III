import { Person } from '@/interface'
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


interface Props {
  countPerson: number
  addPerson: (person: Person) => void
}

export const Formulario: React.FC<Props> = ({ addPerson , countPerson}) => {
  
  const [person, setPerson] = useState<Person>({
    id: Math.floor(Math.random() * 40) + 1 + countPerson,
    lastName: '',
    firstName: '',
    age: 0,
    house: '',
    title: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addPerson(person)
    setPerson({
      id: Math.floor(Math.random() * 40) + 1 + countPerson,
      lastName: '',
      firstName: '',
      age: 0,
      house: '',
      title: ''
    })
  }

  return (
    <Paper
      elevation={1}
      sx={{
        p: "32px",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "50%",
        margin: "auto",
      }}
    >
      <Typography variant="h4" align="center">
        Agregar un nuevo personaje
      </Typography>

      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        onSubmit={handleSubmit}
      >
        <Grid item xs={12}>
          <TextField
            id='last-name'
            label='Last name'
            name='lastName'
            variant='outlined'
            sx={{ width: 1 }}
            value={person.lastName}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id='first-name'
            label='First name'
            name='firstName'
            variant='outlined'
            sx={{ width: 1 }}
            value={person.firstName}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id='age'
            label='Age'
            name='age'
            variant='outlined'
            type='number'
            sx={{ width: 1 }}
            value={person.age}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id='house'
            label='House'
            name='house'
            variant='outlined'
            sx={{ width: 1 }}
            value={person.house}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id='title'
            label='Title'
            name='title'
            variant='outlined'
            sx={{ width: 1 }}
            value={person.title}
            onChange={handleChange}
          />
        </Grid>

        <Button variant='contained' color='primary' type='submit'>Agregar</Button>
      </Box>
    </Paper>
  )
}
