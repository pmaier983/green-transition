import { getUserInputPrompt } from "@/utils/prompts"
import { ErrorMessage } from "@hookform/error-message"
import { useQuery } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import styled, { css } from "styled-components"

import { openai } from "@/utils/openai"
import { Loading } from "./Loading"

const fetchOpenInputResponse = async (userInput: string) =>
  openai.createCompletion({
    model: "text-davinci-002",
    prompt: getUserInputPrompt(userInput),
    temperature: 0.6,
    max_tokens: 256,
  })

interface FormInputs {
  userInput: string
}

const StyledHeader = styled.h1``

const StyledWrapper = styled.div``

const StyledUserInput = styled.input`
  background: #ffffff;
  border: 2px solid #aaaaaa;
  border-radius: 4px;
  width: 100%;
`

const StyledErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.warn};
  `}
`

const StyledOutput = styled.span``

export const QuestionsInput = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormInputs>()

  const {
    data: result,
    refetch,
    isFetching,
  } = useQuery({
    enabled: false,
    queryKey: ["fetchOpenInputResponse"],
    queryFn: () => fetchOpenInputResponse(getValues("userInput")),
  })

  const onSubmit: SubmitHandler<FormInputs> = () => {
    refetch()
  }

  return (
    <StyledWrapper>
      <StyledHeader>Questions?</StyledHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledUserInput
          {...register("userInput", {
            required: "Please input a question to get a response",
            minLength: {
              value: 10,
              message:
                "Your question is not detailed enough, please tell us more!",
            },
          })}
          placeholder="e.g., how do I gain skills in corporate sustainability?"
          disabled={isFetching}
        />
        <ErrorMessage
          errors={errors}
          name="userInput"
          // TODO-p0: format error messages
          render={({ message }) => (
            <StyledErrorMessage>{message}</StyledErrorMessage>
          )}
        />
      </form>
      <StyledOutput>{result?.data.choices?.at(0)?.text}</StyledOutput>
      {isFetching && <Loading />}
    </StyledWrapper>
  )
}
