import Image from "next/image"
import styled, { css } from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledHeader = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.main};
  `}
  font-size: 1.25rem;
`

export const Logo = () => (
  <StyledWrapper>
    <Image
      src="/images/DALLE-logo.jpeg"
      alt="Three arrows rotating in a circle around a leaf, the logo of this chrome extension called the green transition"
      height={75}
      width={75}
    />
    <StyledHeader>The Green Transition</StyledHeader>
  </StyledWrapper>
)
