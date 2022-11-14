import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    main: "hsl(107deg, 98%, 26%)",
    warn: "hsl(14deg, 94%, 61%)",
  },
}

export const ThemeWrapper = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
