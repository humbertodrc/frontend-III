# React Hook Form


## Instalar dependencias
```sh
npm install react-hook-form
```

## Instalar yup para las validaciones
```sh
npm install yup
```

## Instalar react-hook-form-devtools para ver los errores en consola
```sh
npm install react-hook-form-devtools
```

## Para utilizar las DevTool: 
```javascript
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
```
```javascript
const {control} = useForm();
```
```javascript
 <DevTool control={control} />
```

## Agregar validaciones con yup
```sh
npm i yup
```
```sh
npm install @hookform/resolvers yup
```

## Consultar los metodos de yup en: https://www.npmjs.com/package/yup


## useFormContext:

- Acceder a los métodos del formulario: Puedes acceder a métodos como register, handleSubmit, reset, setError, clearErrors, etc., sin pasar props de formulario a través de todos tus componentes.

```javascript
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

function MyForm() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <FormComponent />
    </FormProvider>
  );
}

function FormComponent() {
  const { register, handleSubmit } = useFormContext();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <input type="submit" />
    </form>
  );
}
```


- Validación en componentes anidados: Puedes realizar la validación en componentes anidados y mostrar errores en el componente apropiado

```javascript
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

function MyForm() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <FormComponent />
    </FormProvider>
  );
}

function FormComponent() {
  const { register, handleSubmit, errors } = useFormContext();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} />
      {errors.name && <p>Este campo es obligatorio.</p>}
      <input type="submit" />
    </form>
  );
}
```
