import { wait } from "@/utils/helperFunctions"
import { useQuery } from "@tanstack/react-query"
import styled, { css } from "styled-components"
import { dummyJobs } from "./dummy"

import { Loading } from "./Loading"
import { MaterialIcon } from "./MaterialIcon"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledHeader = styled.div`
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 24px;
`

const StyledChip = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.main};
    color: white;
    font-weight: bold;
    width: max-content;
    padding: 0 1rem;
    margin: 0.5rem 0;
    border-radius: 32px;
  `}
`

const StyledDescription = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 1rem;
`

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledLeftColumn = styled.div`
  flex: 3;
  padding: 2px 5px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  line-height: 1.4rem;
`

const StyledRightColumn = styled(StyledLeftColumn)`
  flex: 1;
  justify-content: center;
`

const StyledGreenCheck = styled(MaterialIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.main};
  `}
`

const StyledLoading = styled(Loading)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const fetchIfJobIsGreen = async () => wait(3000)

export const Job = () => {
  // TODO: implement seth's fetch
  const { isLoading } = useQuery({
    queryKey: ["fetchIfJobIsGreen"],
    queryFn: fetchIfJobIsGreen,
  })

  if (isLoading) {
    return <StyledLoading />
  }

  const job = dummyJobs.at(0)

  return (
    <StyledWrapper>
      <StyledHeader>
        {document?.getElementsByClassName(
          "t-24 t-bold jobs-unified-top-card__job-title"
        )?.[0]?.textContent ?? job?.title}
      </StyledHeader>
      <StyledChip>Green job</StyledChip>
      <StyledDescription>
        {document?.getElementsByClassName(
          "jobs-box__html-content jobs-description-content__text t-14 t-normal jobs-description-content__text--stretch"
        )?.[0]?.textContent ?? job?.description}
      </StyledDescription>
      <StyledTable>
        <StyledRow>
          <StyledLeftColumn>Skills</StyledLeftColumn>
          <StyledRightColumn>Green Check</StyledRightColumn>
        </StyledRow>
        {job?.skills.map((skill) => (
          <StyledRow key={skill.skill}>
            <StyledLeftColumn>{skill.skill}</StyledLeftColumn>
            <StyledRightColumn>
              {skill.isMatched && <StyledGreenCheck name="check_circle" />}
            </StyledRightColumn>
          </StyledRow>
        ))}
      </StyledTable>
    </StyledWrapper>
  )
}
