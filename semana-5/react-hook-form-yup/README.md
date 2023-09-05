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


## Methods de useForm:

**`register`**: Este método permite registrar un campo de entrada en el formulario y habilitar su seguimiento. Recibe el nombre del campo como argumento.

**`handleSubmit`**: Este método se utiliza para manejar la validación y el envío del formulario. Recibe una función de devolución de llamada como argumento que se ejecutará cuando el formulario sea válido.

**`watch`**: Este método se utiliza para suscribirse a los cambios en los valores de los campos de entrada. Recibe el nombre del campo como argumento opcional. Si no se especifica ningún nombre de campo, se devolverán todos los valores.

**`setValue`**: Este método se utiliza para establecer de forma programática el valor de un campo. Recibe el nombre del campo y el nuevo valor como argumentos.

**`setError`**: Este método se utiliza para establecer de forma programática un error en un campo. Recibe el nombre del campo y el mensaje de error como argumentos.

**`clearErrors`**: Este método se utiliza para eliminar los errores asociados a uno o varios campos. Recibe el nombre del campo o un arreglo de nombres de campos como argumento.

**`reset`**: Este método se utiliza para restablecer el formulario a su estado inicial, borrando los valores y los errores de los campos registrados.

**`formState`**: Este objeto contiene el estado actual del formulario y proporciona información útil, como si el formulario es válido, si se está enviando, etc.

## formState

1. **`dirty`**: Esta propiedad indica si el formulario ha sido modificado o no. Devuelve **`true`** si al menos uno de los campos ha sido modificado.

2. **`isSubmitting`**: Esta propiedad indica si el formulario se encuentra en proceso de envío. Devuelve **`true`** cuando se activa el evento de envío y se está realizando el procesamiento, y luego vuelve a **`false`** cuando el envío se completa o se cancela.

3. **`isSubmitted`**: Esta propiedad indica si el formulario ha sido enviado. Devuelve **`true`** después de que se complete el envío.

4. **`isValid`**: Esta propiedad indica si el formulario es válido en función de las reglas de validación definidas. Devuelve **`true`** si todos los campos pasan las validaciones, de lo contrario, devuelve **`false`**.

5. **`errors`**: Esta propiedad contiene un objeto que almacena los errores asociados a cada campo. Cada campo registrado tendrá una clave correspondiente en el objeto **`errors`** y el valor será el mensaje de error. Si no hay errores, el objeto **`errors`** estará vacío.

## Validciones de los Inputs

1. Validación de campo requerido (**`required`**):
    - Ejemplo: **`{ required: true }`**
    - Verifica si el campo tiene un valor no vacío.
2. Validación de longitud mínima (**`minLength`**):
    - Ejemplo: **`{ minLength: 6 }`**
    - Verifica si la longitud del valor del campo cumple con un mínimo especificado.
3. Validación de longitud máxima (**`maxLength`**):
    - Ejemplo: **`{ maxLength: 10 }`**
    - Verifica si la longitud del valor del campo cumple con un máximo especificado.
4. Validación de patrón (**`pattern`**):
    - Ejemplo: **`{ pattern: /^[A-Za-z]+$/ }`**
    - Verifica si el valor del campo cumple con un patrón de expresión regular especificado.
5. Validación numérica mínima (**`min`**):
    - Ejemplo: **`{ min: 0 }`**
    - Verifica si el valor del campo es numérico y cumple con un mínimo especificado.
6. Validación numérica máxima (**`max`**):
    - Ejemplo: **`{ max: 100 }`**
    - Verifica si el valor del campo es numérico y cumple con un máximo especificado.

## Guía sencilla

1. Teoría:
- El hook **`useForm`** es el punto de entrada principal para utilizar React Hook Form en un componente.
- **`useForm`** devuelve varios métodos y propiedades útiles para manejar formularios.
1. Métodos del hook **`useForm`**:
- **`register`**: Se utiliza para registrar un campo de entrada en el formulario y habilitar su seguimiento.
    - Ejemplo de uso: **`register('firstName')`**.
- **`handleSubmit`**: Se utiliza para manejar la validación y el envío del formulario.
    - Ejemplo de uso: **`handleSubmit(onSubmit)`**.
- **`watch`**: Se utiliza para suscribirse a los cambios en los valores de los campos de entrada.
    - Ejemplo de uso: **`watch('firstName')`**.
- **`setValue`**: Se utiliza para establecer de forma programática el valor de un campo.
    - Ejemplo de uso: **`setValue('firstName', 'John')`**.
- **`setError`**: Se utiliza para establecer de forma programática un error en un campo.
    - Ejemplo de uso: **`setError('firstName', { type: 'manual', message: 'Este campo es obligatorio' })`**.
- **`clearErrors`**: Se utiliza para eliminar los errores asociados a uno o varios campos.
    - Ejemplo de uso: **`clearErrors('firstName')`**.
- **`reset`**: Se utiliza para restablecer el formulario a su estado inicial.
    - Ejemplo de uso: **`reset()`**.
- **`formState`**: Proporciona información sobre el estado actual del formulario.
    - Ejemplo de uso: **`formState.isValid`**, **`formState.isSubmitting`**, **`formState.errors`**.
    1. Casos de uso:
    
    Registro de un campo de entrada:
    
    ```jsx
    <input {...register('firstName')} />
    ```
    
    Manejo del envío del formulario:
    
    ```jsx
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Campos de entrada */}
      <button type="submit">Enviar</button>
    </form>
    ```
    
    Suscripción a cambios en los valores de los campos:
    
    ```jsx
    const firstName = watch('firstName');
    ```
    
    Establecimiento de valores de campo de forma programática:
    
    ```jsx
    setValue('firstName', 'John');
    ```
    
    Establecimiento de errores de campo de forma programática:
    
    ```jsx
    setError('firstName', { type: 'manual', message: 'Este campo es obligatorio' });
    ```
    
    Eliminación de errores de campo:
    
    ```jsx
    clearErrors('firstName');
    ```
    
    Restablecimiento del formulario:
    
    ```jsx
    reset();
    ```
    
    Uso de propiedades **`formState`** para realizar acciones condicionales:
    
    ```jsx
    <button type="submit" disabled={!formState.isValid || formState.isSubmitting}>
      Enviar
    </button>
    ```