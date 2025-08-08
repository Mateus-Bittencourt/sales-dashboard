import type { FormComponentProps } from '@types'
import { StyledButton, StyledInput } from '@components'
import styled from 'styled-components'
import { pxToRem } from '@utils'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};
  width: 100%;
`

export default function FormComponent({
  inputs,
  buttons,
  message,
}: FormComponentProps) {
  return (
    <StyledForm>
      {inputs.map((inputProps, index) => (
        <StyledInput key={index} {...inputProps} />
      ))}
      {buttons.map((buttonProps, index) => (
        <StyledButton key={index} {...buttonProps} />
      ))}
      {message && (
        <div style={{ color: message.type === 'error' ? 'red' : 'green' }}>
          {message.msg}
        </div>
      )}
    </StyledForm>
  )
}
