import Image from "next/image"
import React from "react"
import styled from "styled-components"

const StyledLoadingSpinner = styled(Image)`
  padding: 1rem;
  animation: rotation 2.5s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`

export const Loading = ({ ...rest }: React.PropsWithChildren) => {
  return (
    <StyledLoadingSpinner
      {...rest}
      src="/images/DALLE-logo.jpeg"
      alt="Three arrows rotating in a circle around a leaf, the logo of this chrome extension called the green transition"
      height={75}
      width={75}
    />
  )
}
