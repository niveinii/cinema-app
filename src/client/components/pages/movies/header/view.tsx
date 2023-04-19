import React from "react"
import styled from "styled-components"
import { MAIN_PAGE_TITLE } from "./config"

export const Header = () => {
  return (
    <Container>
      <HeaderText>{MAIN_PAGE_TITLE}</HeaderText>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const HeaderText = styled.div`
  text-align: center;
  text-transform: uppercase;
  width: 60%;
  color: black;
  font: normal normal bold 80px/66px Arial;
  @media screen and (max-width: 1000px) {
    font: normal normal bold 60px/66px Arial;
  }
  @media screen and (max-width: 600px) {
    font: normal normal bold 40px/66px Arial;
  }
  @media screen and (max-width: 400px) {
    font: normal normal bold 20px/66px Arial;
  }
`
