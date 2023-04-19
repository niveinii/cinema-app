import React from "react"
import styled from "styled-components"

type Props = {
  text: string
  icon: string
  backgroundColor?: string
  flexDirection?: string
  cb: (args: any) => void
  width?: string
}

export const RoundedButton = ({
  flexDirection,
  backgroundColor,
  text,
  icon,
  cb,
  width,
}: Props) => {
  return (
    <StyledRoundedButton
      flexDirection={flexDirection}
      backgroundColor={backgroundColor}
      width={width}
      onClick={cb}
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
  flexDirection?: string
  backgroundColor?: string
  width?: string
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
