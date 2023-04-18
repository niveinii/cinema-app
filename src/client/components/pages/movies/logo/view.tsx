import React from "react"
import styled from "styled-components"
import logo from "../../../../assets/MoviesLogo.png"

export const Logo = () => {
  return (
    <Container>
      <img src={logo} alt="" />
    </Container>
  )
}

const Container = styled.div`
  padding: 0 5%;
  background-color: white;
  align-items: center;
`
