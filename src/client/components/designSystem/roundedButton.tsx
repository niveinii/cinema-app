import React from "react"
import styled from "styled-components"

type Props = {
  text: string
  icon: string
  width?: string
  flexDirection?: string
  cb: (args: any) => void
  backgroundColor?: string
}

export const RoundedButton = ({
  cb,
  text,
  icon,
  width,
  flexDirection,
  backgroundColor,
}: Props) => {
  return (
    <StyledRoundedButton
      onClick={cb}
      width={width}
      flexDirection={flexDirection}
      backgroundColor={backgroundColor}
    >
      {text} <StyledIcon src={icon} />
    </StyledRoundedButton>
  )
}

const StyledIcon = styled.img`
  height: 10px;
  width: 20px;
`
const StyledRoundedButton = styled.button<{
  width?: string
  flexDirection?: string
  backgroundColor?: string
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 5px 15px;
  border: 1px solid #000000;
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ backgroundColor }) =>
    `background-color: ${backgroundColor ? backgroundColor : "transparent"};`}
  border-radius: 100px;
  @media screen and (max-width: 400px) {
    ${({ width }) => width && `width: 50%;`}
  }
`
