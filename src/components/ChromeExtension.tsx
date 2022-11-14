import styled, { css } from "styled-components"
import { Button } from "./Button"
import { Job } from "./Job"
import { Logo } from "./Logo"
import { MaterialIcon } from "./MaterialIcon"

import { QuestionsInput } from "./QuestionsInput"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 375px;
  min-height: 500px;
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.main};
  `}
  padding: 1rem;
`

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 0.5rem;
`

const StyledButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  border: none;
  background: hsl(0, 0%, 90%);
  border-radius: 2px;
`

const StyledMaterialIcon = styled(MaterialIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.main};
  `}
`

export const ChromeExtension = () => {
  return (
    <StyledWrapper>
      <div>
        <StyledHeader>
          <StyledButtonWrapper>
            <StyledButton>
              Upload Resume
              <StyledMaterialIcon name="check_circle" />
            </StyledButton>
            <StyledButton>
              Connect Linkedin
              <MaterialIcon name="chevron_right" />
            </StyledButton>
          </StyledButtonWrapper>
          <Logo />
        </StyledHeader>
        <Job />
      </div>
      <QuestionsInput />
    </StyledWrapper>
  )
}
