import React from 'react'
import Button from '@mui/material/Button'

interface Props {
  label: string
  type: 'button' | 'submit' | 'reset' | undefined
  variant: 'text' | 'outlined' | 'contained' | undefined
  disable: boolean
  onClick: () => void
}

export const ButtonCustom:React.FC<Props> = ({label, type, variant, disable, ...props}) => {
  return (
    <Button type={type} variant={variant} disabled={disable} {...props}>
      {label}
    </Button>
  )
}
