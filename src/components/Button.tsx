import React from "react"
import styled from "styled-components"

const StyledButton = styled.button``

export const Button = ({ children, ...rest }: React.PropsWithChildren) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}
