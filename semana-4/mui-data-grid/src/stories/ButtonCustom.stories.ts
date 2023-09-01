import { ButtonCustom } from '../components/ButtonCustom'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ButtonCustom> = {
  title: "Components/ButtomCustom",
	component: ButtonCustom,
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "Label of the button",
    },
    variant: {
      description: "Variant of the button",
    },
    disable: {
      description: "Disable the button",
    }
  },
}

export default meta
type Story = StoryObj<typeof ButtonCustom>

export const Prueba: Story = {
  args: {
    label: 'Hola',
    variant: 'contained',
    disable: false
  }
};

// El objeto meta proporciona metadatos sobre el componente y sus propiedades, mientras que la historia Prueba define valores predeterminados para las propiedades del componente que se mostrarán en la interfaz de usuario de Storybook. Esto te permite visualizar e interactuar con el componente ButtonCustom y sus variaciones durante el desarrollo y la documentación.






